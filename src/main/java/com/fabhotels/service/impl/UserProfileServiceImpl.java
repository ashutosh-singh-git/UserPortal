package com.fabhotels.service.impl;

import com.fabhotels.model.UserProfile;
import com.fabhotels.repository.UserProfileRepository;
import com.fabhotels.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public UserProfile setDefaultProfile(UserProfile userProfile) {
        int x = repository.updateDefaultFlag(userProfile.getUserId(), false);
        System.out.println("Updating Default profiles: " + x);
        return repository.save(userProfile);
    }

    @Override
    public void delete(UserProfile user) {
        repository.delete(user);
    }

    @Override
    public List<UserProfile> findAllByUserId(long userId) {
        return repository.findAllByUserId(userId);
    }

    @Override
    public UserProfile findById(long id) {
        return repository.findOne(id);
    }
}
