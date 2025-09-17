package com.insurai.backend.controller;

import com.insurai.backend.model.Verification;
import com.insurai.backend.repository.VerificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/application") // unique base path
@CrossOrigin(origins = "http://localhost:3000")
public class ApplicationController {

    @Autowired
    private VerificationRepository verificationRepository;

    private final String UPLOAD_DIR = "uploads/";

    // Upload documents related to an application
    @PostMapping("/upload")
    public ResponseEntity<String> uploadVerification(
            @RequestParam("userId") Long userId,
            @RequestParam("policyId") Long policyId,
            @RequestParam("aadhar") MultipartFile aadhar,
            @RequestParam("employeeId") MultipartFile employeeId,
            @RequestParam("bankDoc") MultipartFile bankDoc
    ) {
        try {
            File dir = new File(UPLOAD_DIR);
            if (!dir.exists()) dir.mkdirs();

            String timestamp = String.valueOf(System.currentTimeMillis());
            String aadharPath = UPLOAD_DIR + timestamp + "_aadhar_" + aadhar.getOriginalFilename();
            String empPath = UPLOAD_DIR + timestamp + "_emp_" + employeeId.getOriginalFilename();
            String bankPath = UPLOAD_DIR + timestamp + "_bank_" + bankDoc.getOriginalFilename();

            aadhar.transferTo(new File(aadharPath));
            employeeId.transferTo(new File(empPath));
            bankDoc.transferTo(new File(bankPath));

            Verification verification = new Verification(
                    userId,
                    policyId,
                    aadharPath,
                    empPath,
                    bankPath,
                    "PENDING"
            );
            verificationRepository.save(verification);

            return ResponseEntity.ok("Application documents uploaded successfully!");

        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error saving files: " + e.getMessage());
        }
    }
}
