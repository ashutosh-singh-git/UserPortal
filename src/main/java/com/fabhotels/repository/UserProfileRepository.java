package com.fabhotels.repository;

import com.fabhotels.model.UserProfile;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@Repository
public interface UserProfileRepository extends CrudRepository<UserProfile, Long> {

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE UserProfile c SET c.isDefault = :isDefault WHERE c.userId = :userId")
    int updateDefaultFlag(@Param("userId") long userId, @Param("isDefault") boolean isDefault);

    List<UserProfile> findAllByUserId(long userId);

}
