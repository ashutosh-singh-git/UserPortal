package com.fabhotels.controller;

import com.fabhotels.model.Profile;
import com.fabhotels.model.UserProfile;
import com.fabhotels.service.ProfileService;
import com.fabhotels.service.UserProfileService;
import com.fabhotels.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@RestController
@RequestMapping("/profile")
public class Profile1Controller {

    private final ProfileService service;
    private final UserProfileService userProfileService;
    private final UserService userService;


    @Autowired
    public Profile1Controller(ProfileService service, UserProfileService userProfileService, UserService userService) {
        this.service = service;
        this.userProfileService = userProfileService;
        this.userService = userService;
    }

    @Secured("ROLE_USER")
    @RequestMapping(path = "/create", method = RequestMethod.POST)
    public Profile createProfile(@RequestParam long userId, @RequestBody @Valid Profile user) {
        if (userService.findById(userId) == null) {
            throw new DataIntegrityViolationException("Incorrect userId provided");
        }
        if (!service.findByEmail(user.getEmail())) {
            Profile profile = service.create(user);
            UserProfile userProfile = new UserProfile();
            userProfile.setProfileId(profile.getProfileId());
            userProfile.setUserId(userId);
            userProfileService.create(userProfile);
            return profile;
        } else {
            throw new DataIntegrityViolationException("This Email is already registered");
        }
    }

    @Secured("ROLE_USER")
    @RequestMapping(path = "/update", method = RequestMethod.POST)
    public Profile updateProfile(@RequestBody @Valid Profile user) {
        return service.create(user);
    }

    @Secured("ROLE_USER")
    @RequestMapping(method = RequestMethod.GET)
    public Profile fetchProfile(@RequestParam long profileId) {
        return service.findById(profileId);
    }
}
