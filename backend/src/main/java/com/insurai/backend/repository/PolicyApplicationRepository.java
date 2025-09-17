package com.insurai.backend.repository;

import com.insurai.backend.model.PolicyApplication;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PolicyApplicationRepository extends JpaRepository<PolicyApplication, Long> {
    List<PolicyApplication> findByUserId(Long userId);
}
