package com.ouarhou.authservice.data.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ouarhou.authservice.data.entities.UserAccount;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount,Long> {

    public Optional<UserAccount> findByUsername(final String username);

}