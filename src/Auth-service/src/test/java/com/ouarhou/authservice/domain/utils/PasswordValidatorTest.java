package com.ouarhou.authservice.domain.utils;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.assertj.core.api.Assertions.assertThat;

public class PasswordValidatorTest {

    private PasswordValidator passwordValidator;
    @BeforeEach
    void setUp() {
        passwordValidator=new PasswordValidator();
    }

    @ParameterizedTest
    @CsvSource({
        "lhou, lhou, true",
        "lhou, lhoussaine, false"
    })
    void itShouldValidatePassword(String password,String confirmedPassword,boolean expected) {
        // When
        boolean isValid = passwordValidator.test(password,confirmedPassword);
        // Then
        assertThat(isValid).isEqualTo(expected);
    }
}
