package com.ouarhou.authservice.domain.usecases.impl.usecases;

import javax.inject.Inject;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ouarhou.authservice.data.entities.UserAccount;
import com.ouarhou.authservice.data.repositories.UserAccountRepository;
import com.ouarhou.authservice.domain.dtos.UserAccountDTO;
import com.ouarhou.authservice.domain.dtos.UserAccountRequestDTO;
import com.ouarhou.authservice.domain.usecases.iusecases.CreateUserAccountUseCase;
import com.ouarhou.authservice.domain.utils.PasswordValidator;

@Service
public class CreateUserAccountUseCaseImpl implements CreateUserAccountUseCase {
    private final UserAccountRepository userAccountRepository;
    private final PasswordEncoder passwordEncoder;
    private final PasswordValidator passwordValidator;

    @Inject
    public CreateUserAccountUseCaseImpl(UserAccountRepository userAccountRepository, PasswordEncoder passwordEncoder, PasswordValidator passwordValidator) {
        this.userAccountRepository = userAccountRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordValidator = passwordValidator;
    }

    @Override
    public UserAccountDTO execute(UserAccountRequestDTO userAccountRequestDTO) throws IllegalStateException,IllegalArgumentException{
        UserAccount userAccount = userAccountRequestDTO.getUserAccount();
        if (!userAccountRepository.findByUsername(userAccount.getUsername()).isEmpty()) {
            throw new IllegalStateException("Username already in use");
        }
        else if (!passwordValidator.test(userAccountRequestDTO.getUserAccount().getPassword(),userAccountRequestDTO.getConfirmedPassword())) {
            throw new IllegalArgumentException("Password and confirmed Password are not equals");
        } else {
            userAccount.setPassword(passwordEncoder.encode(userAccount.getPassword()));
            return new UserAccountDTO(userAccountRepository.save(userAccountRequestDTO.getUserAccount()));
        }
    }
}