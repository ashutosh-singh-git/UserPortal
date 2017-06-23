package com.fabhotels.service;

import com.fabhotels.model.UserProfile;
import org.springframework.data.domain.Page;

public interface UserProfileService {
    UserProfile create(UserProfile user);

    void delete(UserProfile user);

    Page<UserProfile> findAll(int page);

    UserProfile findById(long id);
}
