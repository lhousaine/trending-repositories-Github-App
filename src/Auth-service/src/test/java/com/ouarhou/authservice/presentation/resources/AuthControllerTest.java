package com.ouarhou.authservice.presentation.resources;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.ouarhou.authservice.domain.dtos.JwtRequest;
import com.ouarhou.authservice.domain.usecases.iusecases.AuthUseCase;

@ExtendWith(SpringExtension.class)
@WebMvcTest(AuthController.class)
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

   // @Autowired
   // private WebApplicationContext wac;

    @MockBean
    private AuthUseCase authUseCase;

    @MockBean
    @Qualifier(value="UserDetailsServiceImpl")
    private UserDetailsService userDetailsService;

    @MockBean
    private PasswordEncoder passwordEncoder;
    //@InjectMocks
    //private AuthController authController;

    private ObjectMapper objectMapper;
    private String requestJson;
    private String token;

    @BeforeEach
    void setUp() throws JsonProcessingException {
      // this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
       // mockMvc = MockMvcBuilders.standaloneSetup(authController)
       //   .build();
        objectMapper = new ObjectMapper();

        JwtRequest jwtRequest = new JwtRequest("lhou", "lhou");
        objectMapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ObjectWriter ow = objectMapper.writer().withDefaultPrettyPrinter();
        requestJson = ow.writeValueAsString(jwtRequest);
        token = "token.Token.token";
    }

    @Test
    public void shouldReturnValidToken() throws Exception {

        given(authUseCase.createAuthenticationToken(any(JwtRequest.class))).willReturn(token);
        this.mockMvc.perform(MockMvcRequestBuilders.
            post("/authenticate")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestJson)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$.jwttoken").value(token))
                .andReturn();
    }
}
