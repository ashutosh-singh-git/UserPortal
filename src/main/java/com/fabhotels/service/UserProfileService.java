package com.fabhotels.service;

import com.fabhotels.model.UserProfile;

import java.util.List;

public interface UserProfileService {
    UserProfile create(UserProfile user);

    UserProfile setDefaultProfile(UserProfile userProfile);

    void delete(UserProfile user);

    List<UserProfile> findAllByUserId(long userId);

    UserProfile findById(long id);
}
