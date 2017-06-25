package com.fabhotels.service;

import com.fabhotels.model.Profile;

import java.util.List;

public interface ProfileService {
    Profile create(Profile user);

    void delete(Profile user);

    List<Profile> findAllByProfileId(long userId);

    Profile findById(long id);

    boolean findByEmail(String email);
}
