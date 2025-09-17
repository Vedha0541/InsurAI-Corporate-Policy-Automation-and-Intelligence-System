package com.insurai.backend.dto;

import com.insurai.backend.model.PolicyApplication;
import java.util.List;

public class AdminDashboardResponse {

    private final long totalUsers;
    private final long totalApplications;
    private final List<PolicyApplication> applications;

    // Constructor
    public AdminDashboardResponse(long totalUsers, long totalApplications, List<PolicyApplication> applications) {
        this.totalUsers = totalUsers;
        this.totalApplications = totalApplications;
        this.applications = applications;
    }

    // Getters only (Immutable DTO)
    public long getTotalUsers() {
        return totalUsers;
    }

    public long getTotalApplications() {
        return totalApplications;
    }

    public List<PolicyApplication> getApplications() {
        return applications;
    }
}
