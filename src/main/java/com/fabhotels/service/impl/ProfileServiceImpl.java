package com.fabhotels.service.impl;

import com.fabhotels.model.Profile;
import com.fabhotels.repository.ProfileRepository;
import com.fabhotels.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Ashutosh on 25-06-2017.
 */
@Service
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository repository;

    @Autowired
    public ProfileServiceImpl(ProfileRepository repository) {
        this.repository = repository;
    }

    @Override
    public Profile create(Profile user) {
        return repository.save(user);
    }

    @Override
    public void delete(Profile user) {
        repository.delete(user);
    }

    @Override
    public List<Profile> findAllByProfileId(long profileId) {
        return repository.findAllByProfileId(profileId);
    }

    @Override
    public Profile findById(long id) {
        return repository.findOne(id);
    }

    @Override
    public boolean findByEmail(String email) {
        Profile profile = repository.findByEmail(email);
        return profile != null;
    }
}
