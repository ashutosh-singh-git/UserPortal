package com.fabhotels.controller;

import com.fabhotels.model.UserProfile;
import com.fabhotels.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@RestController
@RequestMapping("/profile")
public class UserProfileController {

    private final UserProfileService service;

    @Autowired
    public UserProfileController(UserProfileService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    public UserProfile createUser(@RequestBody @Valid UserProfile user) {
        return service.create(user);
    }

    @RequestMapping(method = RequestMethod.GET)
    public UserProfile fetchUser(@RequestParam long userId) {
        return service.findById(userId);
    }
}
