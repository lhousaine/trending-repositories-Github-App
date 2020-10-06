package com.ouarhou.authservice.domain.dtos;


import com.ouarhou.authservice.data.entities.UserAccount;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserAccountDTO {
    private Long userId;
    private String firstName;
    private String lastName;
    private String username;
    public UserAccountDTO(UserAccount userAccount) {
        this.userId=userAccount.getId();
        this.firstName = userAccount.getFirstName();
        this.lastName = userAccount.getLastName();
        this.username = userAccount.getUsername();
    }
}
