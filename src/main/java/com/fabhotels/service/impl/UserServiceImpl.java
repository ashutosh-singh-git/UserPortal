package com.fabhotels.service.impl;

import com.fabhotels.model.User;
import com.fabhotels.repository.UserRepository;
import com.fabhotels.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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

    public User getUserByName(String username) {
        return repository.findByUsername(username);
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user;
        try {
            user = getUserByName(username);
            if (user == null) {
                throw new UsernameNotFoundException(username);
            } else {
                return user;
            }
        } catch (Exception e) {
            throw new InternalAuthenticationServiceException(e.getMessage());
        }
    }
}
