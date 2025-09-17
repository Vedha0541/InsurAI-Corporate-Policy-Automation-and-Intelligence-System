package com.insurai.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.insurai.backend.model.User;
import com.insurai.backend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // -------------------
    // USER / ADMIN REGISTER
    // -------------------
    public User register(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email already registered");
        }

        // Encode password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Default role = user
        if (user.getRole() == null) user.setRole("user");
        else user.setRole(user.getRole().toLowerCase());

        return userRepository.save(user);
    }

    // -------------------
    // LOGIN
    // -------------------
    public User login(String email, String rawPassword) {
        Optional<User> opt = userRepository.findByEmail(email);
        if (opt.isPresent() && passwordEncoder.matches(rawPassword, opt.get().getPassword())) {
            return opt.get();
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials");
    }

    // -------------------
    // ADMIN DASHBOARD METHODS
    // -------------------

    // Count all users (role = user)
    public long countUsers() {
        return userRepository.findAllByRole("user").size();
    }

    // Count all admins
    public long countAdmins() {
        return userRepository.findAllByRole("admin").size();
    }

    // Fetch all users (excluding admins)
    public List<User> getAllUsers() {
        return userRepository.findAllByRole("user");
    }

    // Fetch single user by ID
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }
}
