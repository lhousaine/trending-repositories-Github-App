package com.ouarhou.authservice.domain.usecases.iusecases;

import com.ouarhou.authservice.domain.dtos.UserAccountDTO;
import com.ouarhou.authservice.domain.dtos.UserAccountRequestDTO;

public interface CreateUserAccountUseCase {

    public UserAccountDTO execute(UserAccountRequestDTO userAccountRequestDTO);
}
