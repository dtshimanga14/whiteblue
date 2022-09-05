package com.wb.management.controller;

import com.wb.management.domain.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Management {
    @GetMapping("/users")
    public ResponseEntity<User> sayHi() {
        return new ResponseEntity<User>(new User("james","gosling","brian"), HttpStatus.OK);
    }
}
