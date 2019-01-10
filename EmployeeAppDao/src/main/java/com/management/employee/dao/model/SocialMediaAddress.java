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
@Table(name = "social_media_address")
public class SocialMediaAddress {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "social_media_address_id", length = 11)
	private long id;
	
	@Column(name = "social_media_address_name", length = 20)
	private String name;
	
	@Column(name = "social_media_address_url", length = 150)
	private String url;

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "SocialMediaAddress [id=" + id + ", name=" + name + ", url=" + url + "]";
	}
	
}
