package com.fabhotels.controller;

import com.fabhotels.model.User;
import com.fabhotels.model.UserProfile;
import com.fabhotels.service.UserProfileService;
import com.fabhotels.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService service;
    private final UserProfileService profileService;

    @Autowired
    public UserController(UserService service, UserProfileService profileService) {
        this.service = service;
        this.profileService = profileService;
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public User userLogin(@RequestBody User userId) {
        return service.findById(userId.getUserId());
    }

    @RequestMapping(path = "/register", method = RequestMethod.POST)
    public User userRegister(@RequestBody @Valid UserProfile profile) {
        UserProfile userProfile = profileService.create(profile);
        User user = new User();
        user.setUserId(userProfile.getUserId());
        user.setUsername(userProfile.getEmail());
        user.setPassword(userProfile.getPassword());
        return service.create(user);
    }

    @RequestMapping(method = RequestMethod.GET)
    public User fetchUser(@RequestParam long userId) {
        return service.findById(userId);
    }
}
