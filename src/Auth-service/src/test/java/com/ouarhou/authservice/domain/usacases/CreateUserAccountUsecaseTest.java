package com.ouarhou.authservice.domain.usacases;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ouarhou.authservice.data.entities.UserAccount;
import com.ouarhou.authservice.data.repositories.UserAccountRepository;
import com.ouarhou.authservice.domain.dtos.UserAccountDTO;
import com.ouarhou.authservice.domain.dtos.UserAccountRequestDTO;
import com.ouarhou.authservice.domain.usecases.impl.usecases.CreateUserAccountUseCaseImpl;
import com.ouarhou.authservice.domain.utils.PasswordValidator;

public class CreateUserAccountUsecaseTest {
    @InjectMocks
    private CreateUserAccountUseCaseImpl createUserAccountUseCaseImpl;
    @Mock
    private UserAccountRepository userAccountRepository;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private PasswordValidator passwordValidator;
    private UserAccount userAccount;
    private UserAccountDTO userAccountResponse;
    private UserAccountRequestDTO userAccountRequest;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void itShouldSaveNewUserAccount(){
        // given
        String username="lhou";
        userAccount=UserAccount.builder()
            .id(1L)
            .firstName("lhoussaine")
            .lastName("ouarhou")
            .username("lhou")
            .password("lhou")
            .build();
        userAccountRequest=new UserAccountRequestDTO(userAccount,userAccount.getPassword());
        given(userAccountRepository.findByUsername(username))
            .willReturn(Optional.empty());

        given(userAccountRepository.save(userAccount)).willReturn(userAccount);
        given(passwordValidator.test(userAccount.getPassword(),userAccountRequest.getConfirmedPassword())).willReturn(true);
        // when
        userAccountResponse=createUserAccountUseCaseImpl.execute(userAccountRequest);
        // then
        verify(userAccountRepository).save(userAccount);
        assertThat(userAccountResponse.getFirstName()).isEqualTo(userAccount.getFirstName());
        assertThat(userAccountResponse.getLastName()).isEqualTo(userAccount.getLastName());
        assertThat(userAccountResponse.getUsername()).isEqualTo(userAccount.getUsername());
    }

    @Test
    void itShouldNotSaveNewUserAccountUsernameAlreadyExist(){

        String username="lhou";
        userAccount=UserAccount.builder()
            .id(1L)
            .firstName("lhoussaine")
            .lastName("ouarhou")
            .username("lhou")
            .password("lhou")
            .build();
        userAccountRequest=new UserAccountRequestDTO(userAccount,userAccount.getPassword());

        given(userAccountRepository.findByUsername(username))
            .willReturn(Optional.of(userAccount));
        given(passwordValidator.test(userAccount.getPassword(),userAccountRequest.getConfirmedPassword())).willReturn(true);

        assertThatThrownBy(() -> createUserAccountUseCaseImpl.execute(userAccountRequest))
            .isInstanceOf(IllegalStateException.class)
            .hasMessageContaining("Username already in use");
        // Then
        then(userAccountRepository).should(never()).save(any(UserAccount.class));
    }
    @Test
    void itShouldNotSaveNewUserAccountWhenPasswordNotEqualsToComfirmedPassword(){

        String username="lhou";
        userAccount=UserAccount.builder()
            .id(1L)
            .firstName("lhoussaine")
            .lastName("ouarhou")
            .username("lhou")
            .password("lhou")
            .build();
        userAccountRequest=new UserAccountRequestDTO(userAccount,userAccount.getPassword());

        given(userAccountRepository.findByUsername(username))
            .willReturn(Optional.empty());
        given(passwordValidator.test(userAccount.getPassword(),userAccountRequest.getConfirmedPassword())).willReturn(false);

        assertThatThrownBy(() -> createUserAccountUseCaseImpl.execute(userAccountRequest))
            .isInstanceOf(IllegalArgumentException.class)
            .hasMessageContaining("Password and confirmed Password are not equals");
        // Then
        then(userAccountRepository).should(never()).save(any(UserAccount.class));
    }
}
