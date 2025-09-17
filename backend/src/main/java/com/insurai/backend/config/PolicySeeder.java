package com.insurai.backend.config;

import com.insurai.backend.model.Policy;
import com.insurai.backend.repository.PolicyRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PolicySeeder implements CommandLineRunner {

    private final PolicyRepository repository;

    public PolicySeeder(PolicyRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        if (repository.count() == 0) {
            List<Policy> defaults = List.of(
                Policy.builder()
                      .name("Health Insurance Basic")
                      .type("health")
                      .premium(5000)
                      .coverage(200000)
                      .description("Covers hospitalization, medicines, and surgeries")
                      .build(),

                Policy.builder()
                      .name("Vehicle Insurance")
                      .type("vehicle")
                      .premium(3000)
                      .coverage(100000)
                      .description("Covers accidents, theft, and damages")
                      .build(),

                Policy.builder()
                      .name("House Insurance")
                      .type("house")
                      .premium(4000)
                      .coverage(500000)
                      .description("Covers fire, flood, and theft damages")
                      .build(),

                Policy.builder()
                      .name("Life Insurance")
                      .type("life")
                      .premium(6000)
                      .coverage(1000000)
                      .description("Provides nominee benefits upon policyholder’s death")
                      .build(),

                Policy.builder()
                      .name("Money Savings Plan")
                      .type("savings")
                      .premium(2000)
                      .coverage(250000)
                      .description("A safe money storage plan with guaranteed interest")
                      .build()
            );

            repository.saveAll(defaults);
            System.out.println("✅ Seeded default policies: " + repository.count());
        } else {
            System.out.println("ℹ️ Policies already present: " + repository.count());
        }
    }
}
