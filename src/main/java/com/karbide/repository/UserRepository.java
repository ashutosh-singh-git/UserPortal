package com.karbide.repository;

import com.karbide.model.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Ashutosh on 21-01-2017.
 */
public interface UserRepository extends CrudRepository<User,Long> {
}
