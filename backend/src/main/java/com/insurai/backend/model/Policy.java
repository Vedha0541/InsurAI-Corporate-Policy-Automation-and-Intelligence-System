package com.insurai.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "policies")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Policy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;        // e.g. "Health Insurance Basic"
    private String type;        // e.g. "health", "vehicle"
    private double premium;     // numeric premium
    private double coverage;    // numeric coverage amount

    @Column(length = 1000)
    private String description;
}
