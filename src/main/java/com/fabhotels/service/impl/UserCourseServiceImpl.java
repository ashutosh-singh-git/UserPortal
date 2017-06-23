package com.fabhotels.service.impl;

import com.fabhotels.model.UserCourses;
import com.fabhotels.repository.UserCourseRepository;
import com.fabhotels.service.UserCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Ashutosh on 22-06-2017.
 */
@Service
public class UserCourseServiceImpl implements UserCourseService {

    private final UserCourseRepository repository;

    @Autowired
    public UserCourseServiceImpl(UserCourseRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserCourses create(UserCourses userCourses) {
        return repository.save(userCourses);
    }

    @Override
    public void delete(UserCourses userCourses) {
        repository.delete(userCourses);
    }

    @Override
    public Page<UserCourses> findAll(int page) {
        return null;
    }

    @Override
    public List<UserCourses> findAllById(long userId) {
        return (List<UserCourses>) repository.findByUserId(userId);
    }

    @Override
    public UserCourses findById(long id) {
        return repository.findOne(id);
    }
}
