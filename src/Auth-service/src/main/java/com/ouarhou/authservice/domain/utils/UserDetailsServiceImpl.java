package com.ouarhou.authservice.domain.utils;

import java.util.ArrayList;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ouarhou.authservice.data.entities.UserAccount;
import com.ouarhou.authservice.data.repositories.UserAccountRepository;

@Service
@Qualifier("UserDetailsUseCaseImpl")
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserAccountRepository userAccountRepository;

    @Inject
    public UserDetailsServiceImpl(UserAccountRepository userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserAccount userAccount = userAccountRepository.findByUsername(username).orElseThrow(
            ()-> new UsernameNotFoundException("invalid user information")
        );
        return new User(userAccount.getUsername(), userAccount.getPassword(),new ArrayList<GrantedAuthority>());
    }

}
