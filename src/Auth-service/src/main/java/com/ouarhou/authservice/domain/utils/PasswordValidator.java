package com.ouarhou.authservice.domain.utils;

import java.util.function.Predicate;

import org.springframework.stereotype.Service;

@Service
public class PasswordValidator {

    public boolean test(String password,String confirmedPassword) {
        return password.equals(confirmedPassword);
    }
}
