package com.karbide.repository;

import com.karbide.model.UserProfile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@Repository
public interface UserProfileRepository extends CrudRepository<UserProfile, Long> {
}
