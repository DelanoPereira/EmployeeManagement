/*package com.management.employee.web.test;


import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.management.employee.dao.exception.DaoException;
import com.management.employee.dao.model.Employee;
import com.management.employee.dao.model.EmployeeAddress;
import com.management.employee.dao.model.EmployeeContactDetails;
import com.management.employee.dao.model.SocialMediaAddress;
import com.management.employee.service.EmployeeService;
import com.management.employee.service.exception.ServiceException;

*//**
 * @author Delano
 *
 *//*
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:servicecontext.xml")
public class TestEmployee {
	
	@Autowired
	private EmployeeService employeeService;
	
	@Test
	@Ignore
	public void testModelCreation() {
		System.out.println("=========Creating=============");
	}
	
	@Test
	//@Ignore
	public void testSaveEmployee() throws ServiceException {
		Employee employee = new Employee();
		employee.setFirstName("Delano1");
		employee.setLastName("Pereira1");
		
		EmployeeAddress employeeAddress  = new EmployeeAddress();
		employeeAddress.setCity("Johannesburg");
		employeeAddress.setCountry("South Africa");
		employeeAddress.setState("Gauteng");
		employeeAddress.setZipCode("2000");
		employeeAddress.setStreet("Jacaranda Avenue");

		employee.setEmployeeAddress(employeeAddress);
		
		EmployeeContactDetails employeeContactDetails = new EmployeeContactDetails();
		employeeContactDetails.setEmail("delano.dc@gmail.com");
		employeeContactDetails.setTelephone("1234567890");
		employee.setEmployeeContactDetails(employeeContactDetails);
		
		SocialMediaAddress socialMediaAddress = new SocialMediaAddress();
		socialMediaAddress.setName("Facebook");
		socialMediaAddress.setUrl("www.facebook.com/ssuhdwudbwjbyg652f2y87y.php");
		employee.setSocialMediaAddress(socialMediaAddress);
		
		employeeService.saveEmployee(employee);
	}
	
	@Test
	@Ignore
	public void testEditEmployee() throws DaoException {
		Employee employeeDb = null;
		
		employeeDb = employeeDao.get(new Long(1));
		System.out.println("====> Fetch Successful: "+employeeDb.toString());
		
		System.out.println("====> Updating employee details");
		
		SocialMediaAddress socialMediaAddressUpdate = new SocialMediaAddress();
		socialMediaAddressUpdate.setName("Twitter");
		socialMediaAddressUpdate.setUrl("www.twitter");
		employeeDb.setSocialMediaAddress(socialMediaAddressUpdate);
		
		employeeDao.update(employeeDb);
		
	}

}
*/