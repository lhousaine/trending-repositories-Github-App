package com.ouarhou.authservice.presentation.resources;

import java.security.interfaces.RSAPublicKey;
import java.util.Base64;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.ouarhou.authservice.core.security.RsaKeyGeneration;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(path = "/keyInfos")
@Api(value = "JwtSet/Public Key Rest API")
public class JwkSetEndpoint {
    private RSAKey jwk;
    @Inject
    public JwkSetEndpoint() {
        RsaKeyGeneration rsaKeyGeneration=RsaKeyGeneration.getInstance();
        this.jwk = rsaKeyGeneration.getRsaKey();
    }

    @GetMapping("/.well-known/jwks.json")
    @ApiOperation(value = "Get JWKSet Json Object")
    @ResponseBody
    public Map<String, Object> getKey() {
        return new JWKSet(jwk).toJSONObject();
    }

    @GetMapping("/public/key")
    @ApiOperation(value = "Get Public Key")
    @ResponseBody
    public String getPublicKey() throws JOSEException {
        return convertToPublicKey(jwk.toRSAPublicKey());
    }

    private String convertToPublicKey(RSAPublicKey publicKey){
        String key=Base64.getEncoder().encodeToString(publicKey.getEncoded());
        StringBuilder result = new StringBuilder();
        result.append("-----BEGIN PUBLIC KEY-----\n");
        result.append(key);
        result.append("\n-----END PUBLIC KEY-----");
        return result.toString();
    }
}

