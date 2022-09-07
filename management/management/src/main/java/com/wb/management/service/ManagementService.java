package com.wb.management.service;

import com.wb.management.domain.User;
import com.wb.management.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ManagementService {
    @Autowired
    UserRepository userRepository;

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public Optional<User> findUser(String firstname,String password) {
        return userRepository.findByFirstnameAndPassword(firstname,password);
    }
}
