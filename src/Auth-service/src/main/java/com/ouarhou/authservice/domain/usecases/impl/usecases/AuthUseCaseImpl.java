package com.ouarhou.authservice.domain.usecases.impl.usecases;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.ouarhou.authservice.core.security.JwtToken;
import com.ouarhou.authservice.domain.dtos.JwtRequest;
import com.ouarhou.authservice.domain.usecases.iusecases.AuthUseCase;

@Service
public class AuthUseCaseImpl implements AuthUseCase {

    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JwtToken jwtToken;
    private static final Logger LOG = LoggerFactory.getLogger(AuthUseCaseImpl.class);

    @Inject
    public AuthUseCaseImpl(AuthenticationManager authenticationManager,
                           @Qualifier("UserDetailsServiceImpl") UserDetailsService userDetailsService,
                           JwtToken jwtToken) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtToken = jwtToken;
    }

    public String createAuthenticationToken(JwtRequest authenticationRequest) throws Exception {
        final UserDetails userDetails;
        LOG.info("createAuthenticationToken");
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        userDetails =userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        return jwtToken.generateToken(userDetails);
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            LOG.info("authenticate");
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

}
