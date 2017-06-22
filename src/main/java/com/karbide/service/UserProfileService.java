package com.karbide.service;

import com.karbide.model.UserProfile;
import org.springframework.data.domain.Page;

public interface UserProfileService {
    UserProfile create(UserProfile user);

    void delete(UserProfile user);

    Page<UserProfile> findAll(int page);

    UserProfile findById(long id);
}
