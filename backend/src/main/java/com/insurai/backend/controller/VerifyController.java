package com.insurai.backend.controller;

import com.insurai.backend.model.Verification;
import com.insurai.backend.repository.VerificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/verify") // base path for verification
@CrossOrigin(origins = "http://localhost:3000")
public class VerifyController {

    @Autowired
    private VerificationRepository verificationRepository;

    private final String UPLOAD_DIR = "uploads/";

    // Upload verification documents
    @PostMapping("/documents")
    public ResponseEntity<String> verifyDocuments(
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

            return ResponseEntity.ok("Documents uploaded successfully!");

        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error saving files: " + e.getMessage());
        }
    }

    // Get all verifications for a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Verification>> getUserVerifications(@PathVariable Long userId) {
        List<Verification> verifications = verificationRepository.findByUserId(userId);
        return ResponseEntity.ok(verifications);
    }
}
