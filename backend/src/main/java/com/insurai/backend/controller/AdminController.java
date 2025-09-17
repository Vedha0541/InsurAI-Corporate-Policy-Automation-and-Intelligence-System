package com.insurai.backend.controller;

import com.insurai.backend.dto.AdminDashboardResponse;
import com.insurai.backend.model.PolicyApplication;
import com.insurai.backend.repository.PolicyApplicationRepository;
import com.insurai.backend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    private final UserRepository userRepository;
    private final PolicyApplicationRepository policyApplicationRepository;

    public AdminController(UserRepository userRepository, PolicyApplicationRepository policyApplicationRepository) {
        this.userRepository = userRepository;
        this.policyApplicationRepository = policyApplicationRepository;
    }

    @GetMapping("/dashboard")
    public AdminDashboardResponse getDashboard() {
        long totalUsers = userRepository.count();
        List<PolicyApplication> applications = policyApplicationRepository.findAll();
        long totalApplications = applications.size();

        return new AdminDashboardResponse(totalUsers, totalApplications, applications);
    }
}
