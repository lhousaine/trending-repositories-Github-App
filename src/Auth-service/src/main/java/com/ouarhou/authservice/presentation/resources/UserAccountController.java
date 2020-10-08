package com.ouarhou.authservice.presentation.resources;

import javax.inject.Inject;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.ouarhou.authservice.domain.dtos.UserAccountDTO;
import com.ouarhou.authservice.domain.dtos.UserAccountRequestDTO;
import com.ouarhou.authservice.domain.usecases.iusecases.CreateUserAccountUseCase;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@EnableWebMvc
@RequestMapping("/users")
public class UserAccountController {

    private final CreateUserAccountUseCase createUserAccountUseCase;

    @Inject
    public UserAccountController(CreateUserAccountUseCase createUserAccountUseCase) {
        this.createUserAccountUseCase = createUserAccountUseCase;
    }

    @PostMapping
    public ResponseEntity<UserAccountDTO> create(@RequestBody UserAccountRequestDTO userAccountRequestDTO){
        return ResponseEntity.status(200).body(createUserAccountUseCase.execute(userAccountRequestDTO));
    }

}