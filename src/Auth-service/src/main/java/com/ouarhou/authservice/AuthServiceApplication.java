package com.ouarhou.authservice;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.ouarhou.authservice.core.setup.Initializer;

@SpringBootApplication
public class AuthServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthServiceApplication.class, args);
    }

   // @Bean
    public CommandLineRunner setupDB(){
        return args -> Initializer.initializeDB();
    }

}
