package com.insurai.backend.repository;

import com.insurai.backend.model.Verification;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface VerificationRepository extends JpaRepository<Verification, Long> {
    List<Verification> findByUserId(Long userId);
}
