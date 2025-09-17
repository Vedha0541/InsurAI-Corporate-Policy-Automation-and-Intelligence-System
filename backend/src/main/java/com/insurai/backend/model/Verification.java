package com.insurai.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "verifications")
public class Verification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;        // ID of the user who applied
    private Long policyId;      // ID of the applied policy

    private String aadharPath;  // Path to stored file
    private String employeeIdPath;
    private String bankDocPath;

    private String status;      // e.g., PENDING, VERIFIED, REJECTED

    // Constructors
    public Verification() {}

    public Verification(Long userId, Long policyId, String aadharPath, String employeeIdPath, String bankDocPath, String status) {
        this.userId = userId;
        this.policyId = policyId;
        this.aadharPath = aadharPath;
        this.employeeIdPath = employeeIdPath;
        this.bankDocPath = bankDocPath;
        this.status = status;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public Long getPolicyId() { return policyId; }
    public void setPolicyId(Long policyId) { this.policyId = policyId; }

    public String getAadharPath() { return aadharPath; }
    public void setAadharPath(String aadharPath) { this.aadharPath = aadharPath; }

    public String getEmployeeIdPath() { return employeeIdPath; }
    public void setEmployeeIdPath(String employeeIdPath) { this.employeeIdPath = employeeIdPath; }

    public String getBankDocPath() { return bankDocPath; }
    public void setBankDocPath(String bankDocPath) { this.bankDocPath = bankDocPath; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
