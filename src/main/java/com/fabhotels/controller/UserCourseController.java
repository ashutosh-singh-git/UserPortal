package com.fabhotels.controller;

import com.fabhotels.model.UserCourses;
import com.fabhotels.service.UserCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@RestController
@RequestMapping("/usercourses")
public class UserCourseController {

    private final UserCourseService service;

    @Autowired
    public UserCourseController(UserCourseService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    public UserCourses createUserCourse(@RequestBody @Valid UserCourses courses) {
        return service.create(courses);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<UserCourses> fetchUserCourses(@RequestParam long userId) {
        return service.findAllById(userId);
    }
}
