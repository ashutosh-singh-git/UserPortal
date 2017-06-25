package com.fabhotels.service;

import com.fabhotels.model.UserCourses;

import java.util.List;

public interface UserCourseService {
    UserCourses create(UserCourses userCourses);

    void delete(UserCourses userCourses);

    List<UserCourses> findAllById(long userId);

    List<UserCourses> findAllByUserIdAndProfileId(long userId, long profileId);

    UserCourses findById(long id);
}
