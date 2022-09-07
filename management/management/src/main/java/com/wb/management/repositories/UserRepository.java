package com.wb.management.repositories;

import com.wb.management.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User,Integer> {
    Optional<User> findByFirstnameAndPassword(String firstname, String password);
}
