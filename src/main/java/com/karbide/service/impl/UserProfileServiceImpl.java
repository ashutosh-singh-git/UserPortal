package com.karbide.service.impl;

import com.karbide.model.UserProfile;
import com.karbide.repository.UserProfileRepository;
import com.karbide.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@Service
public class UserProfileServiceImpl implements UserProfileService {

    private final UserProfileRepository repository;

    @Autowired
    public UserProfileServiceImpl(UserProfileRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserProfile create(UserProfile user) {
        return repository.save(user);
    }

    @Override
    public void delete(UserProfile user) {
        repository.delete(user);
    }

    @Override
    public Page<UserProfile> findAll(int page) {
        return null;
    }

    @Override
    public UserProfile findById(long id) {
        return repository.findOne(id);
    }
}
