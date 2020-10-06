package com.ouarhou.authservice.domain.usecases.iusecases;

import com.ouarhou.authservice.domain.dtos.JwtRequest;

public interface AuthUseCase {
    public String createAuthenticationToken(JwtRequest authenticationRequest) throws Exception;
}
