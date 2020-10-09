package com.ouarhou.authservice.presentation.resources;

import javax.inject.Inject;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.ouarhou.authservice.domain.dtos.JwtRequest;
import com.ouarhou.authservice.domain.dtos.JwtResponse;
import com.ouarhou.authservice.domain.usecases.iusecases.AuthUseCase;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AuthController {

    private final AuthUseCase authService;

    @Inject
    public AuthController(AuthUseCase authService) {
        this.authService = authService;
    }

    @PostMapping(value = "/authenticate")
    public ResponseEntity<JwtResponse> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        String token=authService.createAuthenticationToken(authenticationRequest);
        return ResponseEntity.ok(new JwtResponse(token));
    }

}
