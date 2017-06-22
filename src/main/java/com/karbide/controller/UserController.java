package com.karbide.controller;

import com.karbide.model.User;
import com.karbide.service.UserService;
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

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    public User createUser(@RequestBody @Valid User user) {
        return service.create(user);
    }

    @RequestMapping(method = RequestMethod.GET)
    public User fetchUser(@RequestParam long userId) {
        return service.findById(userId);
    }
}
