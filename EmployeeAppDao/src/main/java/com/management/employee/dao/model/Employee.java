/**
 * 
 */
package com.management.employee.dao.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * @author Delano
 *
 */
@Entity
@Table(name = "employee")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "employee_id", length = 11)
	private long id;

	@Column(name = "employee_number", length = 20)
	private String employeeNumber;
	
	@Column(name = "employee_firstname", length = 20)
	private String firstName;
	
	@Column(name = "employee_lastname", length = 20)
	private String lastName;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="employee_address")
	private EmployeeAddress employeeAddress;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="employee_contact_details")
	private EmployeeContactDetails employeeContactDetails;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="employee_social_media_address")
	private SocialMediaAddress socialMediaAddress;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public EmployeeAddress getEmployeeAddress() {
		return employeeAddress;
	}

	public void setEmployeeAddress(EmployeeAddress employeeAddress) {
		this.employeeAddress = employeeAddress;
	}

	public EmployeeContactDetails getEmployeeContactDetails() {
		return employeeContactDetails;
	}

	public void setEmployeeContactDetails(EmployeeContactDetails employeeContactDetails) {
		this.employeeContactDetails = employeeContactDetails;
	}

	public SocialMediaAddress getSocialMediaAddress() {
		return socialMediaAddress;
	}

	public void setSocialMediaAddress(SocialMediaAddress socialMediaAddress) {
		this.socialMediaAddress = socialMediaAddress;
	}

	public String getEmployeeNumber() {
		return employeeNumber;
	}

	public void setEmployeeNumber(String employeeNumber) {
		this.employeeNumber = employeeNumber;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", employeeNumber=" + employeeNumber + ", firstName=" + firstName + ", lastName="
				+ lastName + ", employeeAddress=" + employeeAddress + ", employeeContactDetails="
				+ employeeContactDetails + ", socialMediaAddress=" + socialMediaAddress + "]";
	}

}
