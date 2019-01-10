/**
 * 
 */
package com.management.employee.service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * @author Delano
 *
 */
public class EmployeeRequest {
	
	@JsonProperty
	private String firstname;
	
	@JsonProperty
	private String lastname;

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
	
	

}
