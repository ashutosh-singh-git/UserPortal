package com.fabhotels.repository;

import com.fabhotels.model.Profile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@Repository
public interface ProfileRepository extends CrudRepository<Profile, Long> {
    List<Profile> findAllByProfileId(long userId);

    Profile findByEmail(String email);
}
