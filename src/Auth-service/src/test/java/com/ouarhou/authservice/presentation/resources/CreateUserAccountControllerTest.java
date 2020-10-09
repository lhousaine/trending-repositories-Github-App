package com.ouarhou.authservice.presentation.resources;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.ouarhou.authservice.data.entities.UserAccount;
import com.ouarhou.authservice.domain.dtos.UserAccountDTO;
import com.ouarhou.authservice.domain.dtos.UserAccountRequestDTO;
import com.ouarhou.authservice.domain.usecases.iusecases.CreateUserAccountUseCase;

@ExtendWith(SpringExtension.class)
@WebAppConfiguration()
@ContextConfiguration(classes = {UserAccountController.class})
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class CreateUserAccountControllerTest {

    @Autowired
    private WebApplicationContext wac;
    
    private MockMvc mockMvc;
    
    @MockBean
    private CreateUserAccountUseCase userAccountUseCase;

    private ObjectMapper objectMapper;
    private String requestJson;
    private UserAccount userAccount;
    private UserAccountRequestDTO userAccountRequest;
    private UserAccountDTO userAccountDTO;

    @BeforeEach
    void setUp() throws JsonProcessingException {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
        objectMapper = new ObjectMapper();
        userAccount = UserAccount.builder()
            .id(1L)
            .firstName("lhoussaine")
            .lastName("ouarhou")
            .username("lhou")
            .password("lhou")
            .build();
        userAccountRequest = new UserAccountRequestDTO(userAccount, "lhou");
        userAccountDTO = new UserAccountDTO(userAccount);
        objectMapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ObjectWriter ow = objectMapper.writer().withDefaultPrettyPrinter();
        requestJson = ow.writeValueAsString(userAccountRequest);
    }

    @Test
    public void shouldCreateAndReturnNewUserAccount() throws Exception {
        given(userAccountUseCase.execute(any(UserAccountRequestDTO.class))).willReturn(userAccountDTO);
        this.mockMvc.perform(
            post("/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)
                .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.firstName").value(userAccount.getFirstName()))
            .andExpect(jsonPath("$.lastName").value(userAccountDTO.getLastName()))
            .andExpect(jsonPath("$.username").value(userAccountDTO.getUsername()));
    }
}
