package com.insurai.backend.controller;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class ChatBotController {

    private final Map<String, String> faq;

    public ChatBotController() {
        faq = new HashMap<>();
        // Basic questions
        faq.put("what is insurai", "InsurAI is a platform to manage insurance policies, claims, and profiles.");
        faq.put("how do i sign up", "Click the 'Sign Up' button on the homepage and create an account.");
        faq.put("how do i login", "Use your email and password on the login page.");
        faq.put("how do i update my profile", "Go to your profile page, edit the details, and click 'Save'.");
        faq.put("how do i reset my password", "Click 'Forgot Password' on the login page to reset your password.");
        faq.put("how do i view my policies", "Navigate to the 'My Policies' section after logging in.");
        faq.put("how do i file a claim", "Go to the 'Claims' section, click 'New Claim', and fill in the required details.");
        faq.put("who can i contact for support", "You can reach out to our support team at support@insurai.com.");
        faq.put("is my data secure", "Yes, InsurAI uses industry-standard encryption and secure authentication.");
        faq.put("can i delete my account", "Yes, please contact support@insurai.com to request account deletion.");
    }

    @PostMapping("/chat")
    public Map<String, String> chat(@RequestBody Map<String, String> body) {
        String userMsg = body.get("message").toLowerCase();

        String answer = faq.entrySet().stream()
                .filter(e -> userMsg.contains(e.getKey()))
                .map(Map.Entry::getValue)
                .findFirst()
                .orElse("Sorry, I don’t know that yet. Please contact support@insurai.com.");

        return Map.of("reply", answer);
    }
}

