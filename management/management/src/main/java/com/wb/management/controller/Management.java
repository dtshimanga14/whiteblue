package com.wb.management.controller;

import com.wb.management.domain.Credential;
import com.wb.management.domain.Guess;
import com.wb.management.domain.User;
import com.wb.management.service.ManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class Management {
    @Autowired
    ManagementService managementService;
    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody Credential credential) {
        User user = managementService.findUser(
           credential.getUsername(),credential.getPassword()
        ).orElse(null);
        System.out.println(credential);
        System.out.println(user);
        return new ResponseEntity<User>(user,HttpStatus.OK);
    }
    @CrossOrigin
    @PostMapping("/createUser")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        managementService.saveUser(user);
        System.out.println(user);
        return new ResponseEntity<User>(user,HttpStatus.OK);
    }
}
