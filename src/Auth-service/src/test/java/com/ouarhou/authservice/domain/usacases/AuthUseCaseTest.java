package com.ouarhou.authservice.domain.usacases;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.ouarhou.authservice.core.security.JwtToken;
import com.ouarhou.authservice.domain.dtos.JwtRequest;
import com.ouarhou.authservice.domain.usecases.impl.usecases.AuthUseCaseImpl;

public class AuthUseCaseTest {
    @InjectMocks
    private AuthUseCaseImpl authUseCase;
    @Mock
    private AuthenticationManager authenticationManager;
    @Mock
    private UserDetailsService userDetailsService;
    @Mock
    private JwtToken jwtToken;
    private JwtRequest authenticationRequest;
    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        authenticationRequest=new JwtRequest("lhou","lhou");
    }

}
