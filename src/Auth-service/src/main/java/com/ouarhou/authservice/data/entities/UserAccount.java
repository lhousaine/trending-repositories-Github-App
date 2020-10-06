package com.ouarhou.authservice.data.entities;


import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.sun.istack.NotNull;

import lombok.Builder;
import lombok.Data;
import lombok.experimental.Tolerate;


@Builder
@Data
@Entity(name = "users")
public class UserAccount implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    @NotNull
    @Column(unique = true)
    private String username;
    @NotNull
    private String password;

    @Tolerate
    public UserAccount() {

    }
}
