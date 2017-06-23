package com.fabhotels.service;

import com.fabhotels.model.UserCourses;
import org.springframework.data.domain.Page;

import java.util.List;

public interface UserCourseService {
    UserCourses create(UserCourses userCourses);

    void delete(UserCourses userCourses);

    Page<UserCourses> findAll(int page);

    List<UserCourses> findAllById(long userId);

    UserCourses findById(long id);
}
