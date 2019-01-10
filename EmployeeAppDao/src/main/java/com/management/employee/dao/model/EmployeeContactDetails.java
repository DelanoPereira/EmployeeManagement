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
@Table(name = "contact_details")
public class EmployeeContactDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "contact_details_id", length = 11)
	private long id;
	
	@Column(name = "contact_details_email", length = 20)
	private String email;
	
	@Column(name = "contact_detail_telephone", length = 20)
	private String telephone;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "EmployeeContactDetails [id=" + id + ", email=" + email + ", telephone=" + telephone + "]";
	}
	
	
	
}
