/**
 * 
 */
package com.management.employee.dao.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Delano
 *
 */
@Entity
@Table(name = "employee_address")
public class EmployeeAddress {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "employee_address_id", length = 11)
	private long id;
	
	@Column(name = "employee_address_street", length = 20)
	private String street;
	
	@Column(name = "employee_address_state", length = 20)
	private String state;
	
	@Column(name = "employee_address_city", length = 20)
	private String city;
	
	@Column(name = "employee_address_zip_code", length = 20)
	private String zipCode;
	
	@Column(name = "employee_address_country", length = 20)
	private String country;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Override
	public String toString() {
		return "EmployeeAddress [id=" + id + ", street=" + street + ", state=" + state + ", city=" + city + ", zipCode="
				+ zipCode + ", country=" + country + "]";
	}
	
}
