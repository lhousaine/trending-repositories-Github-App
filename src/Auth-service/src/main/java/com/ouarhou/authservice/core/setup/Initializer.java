package com.ouarhou.authservice.core.setup;

import javax.inject.Inject;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.ouarhou.authservice.data.entities.UserAccount;
import com.ouarhou.authservice.domain.dtos.UserAccountRequestDTO;
import com.ouarhou.authservice.domain.usecases.iusecases.CreateUserAccountUseCase;

@Component
public class Initializer {

    private static CreateUserAccountUseCase createUserAccountUseCase;


    @Inject
    public Initializer(CreateUserAccountUseCase createUserAccountUseCase) {
        Initializer.createUserAccountUseCase=createUserAccountUseCase;
    }

    public static void initializeDB(){
        UserAccount userAccount1 =UserAccount.builder()
            .firstName("ouarhou")
            .lastName("ouarhou")
            .username("ouarhou")
            .password("ouarhou")
            .build();

        UserAccount userAccount2 =UserAccount.builder()
            .firstName("lhou")
            .lastName("lhou")
            .username("lhou")
            .password("lhou")
            .build();
        createUserAccountUseCase.execute(new UserAccountRequestDTO(userAccount1,userAccount1.getPassword()));
        createUserAccountUseCase.execute(new UserAccountRequestDTO(userAccount2,userAccount2.getPassword()));
    }
}
