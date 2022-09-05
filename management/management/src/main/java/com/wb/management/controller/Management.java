package com.wb.management.controller;

import com.wb.management.domain.User;
import com.wb.management.service.ManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class Management {
    @Autowired
    ManagementService managementService;
    @GetMapping("/users")
    public ResponseEntity<User> sayHi() {
        return new ResponseEntity<User>(
            new User("james","gosling", "brian","Dd4n13ll@#","james@gmail.com"),
            HttpStatus.OK
          );
    }
    @CrossOrigin
    @PostMapping("/createUser")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        managementService.saveUser(user);
        System.out.println(user);
        return new ResponseEntity<User>(user,HttpStatus.OK);
    }
}
