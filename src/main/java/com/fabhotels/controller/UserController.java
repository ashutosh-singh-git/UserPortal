package com.fabhotels.controller;

import com.fabhotels.model.Profile;
import com.fabhotels.model.User;
import com.fabhotels.model.UserProfile;
import com.fabhotels.service.ProfileService;
import com.fabhotels.service.UserProfileService;
import com.fabhotels.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@RestController
//@RequestMapping(path = "/user")
public class UserController {

    private final UserService service;
    private final UserProfileService userProfileService;
    private final ProfileService profileService;

    @Autowired
    public UserController(UserService service, UserProfileService userProfileService, ProfileService profileService) {
        this.service = service;
        this.userProfileService = userProfileService;
        this.profileService = profileService;
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public User userLogin(@RequestBody User user) {
        User outUser = (User) service.loadUserByUsername(user.getUsername());
        if (!user.getPassword().equals(outUser.getPassword())) {
            throw new AuthenticationCredentialsNotFoundException("Wrong Credentials");
        } else {
            return outUser;
        }
    }

    @RequestMapping(path = "/register", method = RequestMethod.POST)
    public User userRegister(@RequestBody @Valid Profile profile) {
        if (profile.getPassword() == null || profile.getUsername() == null) {
            throw new BadCredentialsException("UserName or Password is not present in the request");
        }
        if (service.getUserByName(profile.getUsername()) != null) {
            throw new DataIntegrityViolationException("This User Name is already registered");
        }
        if (profileService.findByEmail(profile.getEmail())) {
            throw new DataIntegrityViolationException("This Email is already registered");
        }
        Profile newProfile = profileService.create(profile);
        User user = new User();
        UserProfile userProfile = new UserProfile();
        user.setUsername(profile.getUsername());
        user.setPassword(profile.getPassword());
        user = service.create(user);
        userProfile.setUserId(user.getUserId());
        userProfile.setDefault(true);
        userProfile.setProfileId(newProfile.getProfileId());
        userProfileService.create(userProfile);
        return user;
    }

    /*@Secured("ROLE_USER")

    public User fetchUser(@RequestParam long userId) {
        return service.findById(userId);
    }*/
}
