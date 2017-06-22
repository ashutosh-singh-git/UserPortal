package com.karbide.repository;

import com.karbide.model.UserCourses;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@Repository
public interface UserCourseRepository extends CrudRepository<UserCourses, Long> {

    List<UserCourses> findByUserId(long userId);
}
