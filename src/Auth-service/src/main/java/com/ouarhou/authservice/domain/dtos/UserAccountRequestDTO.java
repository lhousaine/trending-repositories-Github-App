package com.ouarhou.authservice.domain.dtos;

import com.ouarhou.authservice.data.entities.UserAccount;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserAccountRequestDTO {
    private UserAccount userAccount;
    private String confirmedPassword;

    public UserAccountRequestDTO(UserAccount userAccount, String confirmedPassword) {
        this.userAccount = userAccount;
        this.confirmedPassword = confirmedPassword;
    }

}
