package com.ouarhou.authservice.domain.utils;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.ouarhou.authservice.data.entities.UserAccount;
import com.ouarhou.authservice.data.repositories.UserAccountRepository;

public class UserDetailsServiceTest {

    @InjectMocks
    private UserDetailsServiceImpl userDetailsService;
    @Mock
    private UserAccountRepository userAccountRepository;
    private String username;
    private UserAccount userAccount;
    private UserDetails userDetails;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        username="lhou";
        userAccount=UserAccount.builder()
            .id(1L)
            .firstName("lhoussaine")
            .lastName("ouarhou")
            .username("lhou")
            .password("lhou")
            .build();
    }

    @Test
    void ItShouldloadUserByUsername(){
        // given
        given(userAccountRepository.findByUsername(username))
            .willReturn(Optional.of(userAccount));
        //when
        userDetails=userDetailsService.loadUserByUsername(username);
        //then
        verify(userAccountRepository).findByUsername(username);
        assertThat(userDetails.getUsername()).isEqualTo(userAccount.getUsername());
        assertThat(userDetails.getPassword()).isEqualTo(userAccount.getPassword());
    }
    @Test
    void ItShouldFailedToLoadUserInvalidUsername(){
        // given
        given(userAccountRepository.findByUsername(username))
            .willReturn(Optional.<UserAccount>empty());
        //then
        assertThatThrownBy(() -> userDetailsService.loadUserByUsername(username))
            .isInstanceOf(UsernameNotFoundException.class)
            .hasMessageContaining("invalid user information");
    }
}
