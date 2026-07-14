package com.cognizant.authservice.controller;

import com.cognizant.authservice.util.JwtUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(HttpServletRequest request) {

        String authorization = request.getHeader("Authorization");

        String encoded = authorization.substring(6);

        byte[] decodedBytes = Base64.getDecoder().decode(encoded);

        String credentials = new String(decodedBytes);

        String username = credentials.split(":")[0];

        String token = JwtUtil.generateToken(username);

        Map<String, String> map = new HashMap<>();

        map.put("token", token);

        return map;
    }
}