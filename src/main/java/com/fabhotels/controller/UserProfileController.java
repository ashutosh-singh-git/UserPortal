package com.fabhotels.controller;

import com.fabhotels.model.UserProfile;
import com.fabhotels.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@RestController
@RequestMapping("/user/profile")
public class UserProfileController {

    private final UserProfileService service;

    @Autowired
    public UserProfileController(UserProfileService service) {
        this.service = service;
    }

    @Secured("ROLE_USER")
    @RequestMapping(method = RequestMethod.POST)
    public UserProfile changeDefaultProfile(@RequestBody @Valid UserProfile user) {
        return service.setDefaultProfile(user);
    }

    @Secured("ROLE_USER")
    @RequestMapping(method = RequestMethod.GET)
    public List<UserProfile> fetchUserProfile(@RequestParam long userId) {
        return service.findAllByUserId(userId);
    }
}
