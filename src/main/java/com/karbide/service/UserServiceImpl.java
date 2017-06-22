package com.karbide.service;

import com.karbide.model.User;
import com.karbide.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

/**
 * Created by Ashutosh on 21-01-2017.
 */
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    @Autowired
    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public User create(User user) {
        return repository.save(user);
    }

    @Override
    public void delete(User user) {
        repository.delete(user);
    }

    @Override
    public Page<User> findAll(int page) {
        return null;
    }

    @Override
    public User findById(long id) {
        return repository.findOne(id);
    }
}
