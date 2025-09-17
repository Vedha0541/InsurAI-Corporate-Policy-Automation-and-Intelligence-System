package com.insurai.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "policy_applications")
public class PolicyApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Long policyId;

    private String name;
    private Integer age;
    private String gender;
    private String type;
    private String premium;
    private String coverage;
    private String status; // PENDING, APPROVED, REJECTED

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public Long getPolicyId() { return policyId; }
    public void setPolicyId(Long policyId) { this.policyId = policyId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getPremium() { return premium; }
    public void setPremium(String premium) { this.premium = premium; }

    public String getCoverage() { return coverage; }
    public void setCoverage(String coverage) { this.coverage = coverage; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
