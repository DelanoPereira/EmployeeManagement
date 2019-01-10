/**
 * 
 */
package com.management.employee.service.dto;

/**
 * @author Delano
 *
 */
public class EmployeeDTO {

	private String firstname;
	
	private String lastname;
	
	private String street;
	
	private String state;
	
	private String city;
	
	private String zip;
	
	private String country;
	
	private String email;
	
	private String telephone;
	
	private String mediaName;
	
	private String mediaUrl;
	
	private String employeeNumber;

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getMediaName() {
		return mediaName;
	}

	public void setMediaName(String mediaName) {
		this.mediaName = mediaName;
	}

	public String getMediaUrl() {
		return mediaUrl;
	}

	public void setMediaUrl(String mediaUrl) {
		this.mediaUrl = mediaUrl;
	}

	public String getEmployeeNumber() {
		return employeeNumber;
	}

	public void setEmployeeNumber(String employeeNumber) {
		this.employeeNumber = employeeNumber;
	}

	@Override
	public String toString() {
		return "EmployeeDTO [firstname=" + firstname + ", lastname=" + lastname + ", street=" + street + ", state="
				+ state + ", city=" + city + ", zip=" + zip + ", country=" + country + ", email=" + email
				+ ", telephone=" + telephone + ", mediaName=" + mediaName + ", mediaUrl=" + mediaUrl
				+ ", employeeNumber=" + employeeNumber + "]";
	}

	
}
