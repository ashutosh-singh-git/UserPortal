package com.fabhotels.repository;

import com.fabhotels.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    User findByUsername(String username);
}
