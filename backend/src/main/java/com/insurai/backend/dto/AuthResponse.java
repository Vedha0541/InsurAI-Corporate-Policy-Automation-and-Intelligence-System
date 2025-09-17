package com.insurai.backend.dto;

public class AuthResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String message;

    public AuthResponse(Long id, String firstName, String lastName, String email, String role, String message) {
        this.id = id; this.firstName = firstName; this.lastName = lastName; this.email = email; this.role = role; this.message = message;
    }

    // getters
    public Long getId(){return id;}
    public String getFirstName(){return firstName;}
    public String getLastName(){return lastName;}
    public String getEmail(){return email;}
    public String getRole(){return role;}
    public String getMessage(){return message;}
}
