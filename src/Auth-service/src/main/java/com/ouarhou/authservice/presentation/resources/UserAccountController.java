package com.ouarhou.authservice.presentation.resources;

import javax.inject.Inject;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ouarhou.authservice.domain.dtos.UserAccountDTO;
import com.ouarhou.authservice.domain.dtos.UserAccountRequestDTO;
import com.ouarhou.authservice.domain.usecases.iusecases.CreateUserAccountUseCase;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/users")
@Api(value = "User Account API")
public class UserAccountController {

    private final CreateUserAccountUseCase createUserAccountUseCase;

    @Inject
    public UserAccountController(CreateUserAccountUseCase createUserAccountUseCase) {
        this.createUserAccountUseCase = createUserAccountUseCase;
    }

    @PostMapping
    @ApiOperation(value = "Create New User Account Rest EndPoint")
    public ResponseEntity<UserAccountDTO> create(@RequestBody UserAccountRequestDTO userAccountRequestDTO) throws IllegalStateException,IllegalArgumentException {
        return ResponseEntity.status(200).body(createUserAccountUseCase.execute(userAccountRequestDTO));
    }

}