package com.insurai.backend.controller;

import com.insurai.backend.dto.UserProfileDto;
import com.insurai.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {

    private final UserService userService;

    public ProfileController(UserService userService) {
        this.userService = userService;
    }

    // Fetch profile for logged-in user
    @GetMapping("/profile")
    public ResponseEntity<UserProfileDto> getProfile(Principal principal) {
        if (principal == null || principal.getName() == null) {
            return ResponseEntity.status(401).build(); // Unauthorized if JWT missing/invalid
        }

        String email = principal.getName();
        UserProfileDto profile = userService.getProfileByEmail(email);
        return ResponseEntity.ok(profile);
    }
}
