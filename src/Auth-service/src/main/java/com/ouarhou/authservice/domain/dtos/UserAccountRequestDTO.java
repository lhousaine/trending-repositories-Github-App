package com.ouarhou.authservice.domain.dtos;

import com.ouarhou.authservice.data.entities.UserAccount;

import lombok.Data;

@Data
public class UserAccountRequestDTO {
    private final UserAccount userAccount;
    private final String confirmedPassword;

    public UserAccountRequestDTO(UserAccount userAccount, String confirmedPassword) {
        this.userAccount = userAccount;
        this.confirmedPassword = confirmedPassword;
    }

}
