package com.ouarhou.authservice.presentation.resources;

import javax.inject.Inject;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ouarhou.authservice.domain.dtos.JwtRequest;
import com.ouarhou.authservice.domain.dtos.JwtResponse;
import com.ouarhou.authservice.domain.usecases.iusecases.AuthUseCase;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@Api(value = "Auth API")
public class AuthController {

    private final AuthUseCase authService;

    @Inject
    public AuthController(AuthUseCase authService) {
        this.authService = authService;
    }

    @PostMapping(value = "/authenticate")
    @ApiOperation(value = "Authenticate Rest Endpoint")
    public ResponseEntity<JwtResponse> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        String token=authService.createAuthenticationToken(authenticationRequest);
        return ResponseEntity.ok(new JwtResponse(token));
    }

}
