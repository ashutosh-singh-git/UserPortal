package com.karbide.service;

import com.karbide.model.User;
import org.springframework.data.domain.Page;

public interface UserService {
    User create(User user);

    void delete(User user);

    Page<User> findAll(int page);

    User findById(long id);
}
