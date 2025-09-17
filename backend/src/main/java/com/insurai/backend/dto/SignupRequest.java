package com.insurai.backend.dto;

public class SignupRequest {
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String password;
    private String role;

    // getters & setters (or use Lombok if preferred)
    public String getFirstName(){return firstName;}
    public void setFirstName(String v){firstName=v;}
    public String getLastName(){return lastName;}
    public void setLastName(String v){lastName=v;}
    public String getPhone(){return phone;}
    public void setPhone(String v){phone=v;}
    public String getEmail(){return email;}
    public void setEmail(String v){email=v;}
    public String getPassword(){return password;}
    public void setPassword(String v){password=v;}
    public String getRole(){return role;}
    public void setRole(String v){role=v;}
}
