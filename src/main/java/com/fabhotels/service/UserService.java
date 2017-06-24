package com.fabhotels.service;

import com.fabhotels.model.User;
import org.springframework.data.domain.Page;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User create(User user);

    void delete(User user);

    Page<User> findAll(int page);

    User findById(long id);

    User getUserByName(String username);
}
