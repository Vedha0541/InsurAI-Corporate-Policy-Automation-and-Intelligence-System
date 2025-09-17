package com.insurai.backend.controller;

import com.insurai.backend.dto.AuthResponse;
import com.insurai.backend.dto.LoginRequest;
import com.insurai.backend.dto.SignupRequest;
import com.insurai.backend.model.User;
import com.insurai.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    // SIGNUP - USER OR ADMIN
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> signup(@RequestBody SignupRequest req) {
        User user = new User();
        user.setFirstName(req.getFirstName());
        user.setLastName(req.getLastName());
        user.setEmail(req.getEmail());
        user.setPhone(req.getPhone());
        user.setPassword(req.getPassword());

        // Normalize role
        String role = (req.getRole() == null) ? "user" : req.getRole().toLowerCase();
        if (role.equals("system administrator")) {
            role = "admin"; // 👈 match with dashboard check
        }
        user.setRole(role);

        User savedUser = userService.register(user);
        savedUser.setPassword(null);

        AuthResponse resp = new AuthResponse(
                savedUser.getId(),
                savedUser.getFirstName(),
                savedUser.getLastName(),
                savedUser.getEmail(),
                savedUser.getRole(),
                "Signup successful"
        );

        return ResponseEntity.ok(resp);
    }

    // LOGIN - USER OR ADMIN
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest req) {
        User user = userService.login(req.getEmail(), req.getPassword());
        user.setPassword(null);

        AuthResponse resp = new AuthResponse(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getRole(),
                "Login successful"
        );

        return ResponseEntity.ok(resp);
    }
}
