package com.insurai.backend.controller;

import com.insurai.backend.dto.PolicyApplicationRequest;
import com.insurai.backend.model.Policy;
import com.insurai.backend.model.PolicyApplication;
import com.insurai.backend.repository.PolicyRepository;
import com.insurai.backend.repository.PolicyApplicationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/policies")
@CrossOrigin(origins = "http://localhost:3000") // allow frontend calls
public class PolicyController {

    private final PolicyRepository policyRepository;
    private final PolicyApplicationRepository policyApplicationRepository;

    public PolicyController(PolicyRepository policyRepository,
                            PolicyApplicationRepository policyApplicationRepository) {
        this.policyRepository = policyRepository;
        this.policyApplicationRepository = policyApplicationRepository;
    }

    // Get all available policies
    @GetMapping
    public List<Policy> getAllPolicies() {
        return policyRepository.findAll();
    }

    // Apply for a policy
    @PostMapping("/apply")
    public ResponseEntity<PolicyApplication> applyPolicy(@RequestBody PolicyApplicationRequest req) {
        PolicyApplication application = new PolicyApplication();
        application.setUserId(req.getUserId());
        application.setPolicyId(req.getPolicyId());
        application.setName(req.getName());
        application.setAge(req.getAge());
        application.setGender(req.getGender());
        application.setType(req.getType());
        application.setPremium(req.getPremium());
        application.setCoverage(req.getCoverage());
        application.setStatus("PENDING"); // default status

        PolicyApplication saved = policyApplicationRepository.save(application);
        return ResponseEntity.ok(saved);
    }

    // Get all applications for a specific user
    @GetMapping("/user/{userId}")
    public List<PolicyApplication> getApplicationsByUser(@PathVariable Long userId) {
        return policyApplicationRepository.findByUserId(userId);
    }
}
