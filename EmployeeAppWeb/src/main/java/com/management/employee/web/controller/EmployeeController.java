/**
 * 
 */
package com.management.employee.web.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.management.employee.dao.data.EmployeeDao;
import com.management.employee.dao.exception.DaoException;
import com.management.employee.dao.model.Employee;
import com.management.employee.dao.model.EmployeeAddress;
import com.management.employee.dao.model.EmployeeContactDetails;
import com.management.employee.dao.model.SocialMediaAddress;
import com.management.employee.service.dto.EmployeeDTO;

/**
 * @author Delano
 *
 */
@Controller
public class EmployeeController {


	@Autowired
	private EmployeeDao employeeDao;
	
	@RequestMapping(value = "/updateEmployee", method = RequestMethod.GET)
	public ModelAndView updateEmployee(HttpServletRequest request) {
		System.out.println("====> Inside Update Employee: ");
		
		/*
		 * Update employee details to database
		 */
	
		ModelAndView model = new ModelAndView("login");
		return model;
	}

	
	@RequestMapping(value = "/getallemployees", method = RequestMethod.GET)
	public ModelAndView getallemployees(@ModelAttribute("employeeForm") EmployeeDTO employeeDTO,HttpServletRequest request) {
		ModelAndView model = new ModelAndView("view");
		
		List<Employee> employees = null;
		try {
			employees = employeeDao.getAllEmployees();
		} catch (DaoException e) {
			e.printStackTrace();
		}
/*
		Map<String,List<Employee>> map = new HashMap<String,List<Employee>>();
		map.put("employeeList", employees);*/
		request.setAttribute("employeeList",employees);
		
		return model;
		
	}
	
	@RequestMapping(value = "/saveEmployee", method = RequestMethod.GET)
	public ModelAndView authenticatLogin(@ModelAttribute("employeeForm") EmployeeDTO employeeDTO,HttpServletRequest request) {
		System.out.println("====> Employee DTO:"+employeeDTO.toString());
		ModelAndView model = new ModelAndView("dashboard");

		/*
		 * Save  or update employee details to database
		 */
		Employee employee = null;

		try {
			employee = employeeDao.getEmployeeByEmployeeNumber(employeeDTO.getEmployeeNumber());
		} catch (DaoException e1) {
			System.out.println("===> Employee does not exist");
			//e1.printStackTrace();
		}
		
		if(employee == null) {
			employee = new Employee();
			try {
				System.out.println("===> Inside try");
				employee.setFirstName(employeeDTO.getFirstname());
				employee.setLastName(employeeDTO.getLastname());
				EmployeeAddress employeeAddress = new EmployeeAddress();
				employeeAddress.setCity(employeeDTO.getCity());
				employeeAddress.setCountry(employeeDTO.getCountry());
				employeeAddress.setState(employeeDTO.getState());
				employeeAddress.setStreet(employeeDTO.getStreet());
				employeeAddress.setZipCode(employeeDTO.getZip());
				employee.setEmployeeAddress(employeeAddress);
				EmployeeContactDetails employeeContactDetails = new EmployeeContactDetails();
				employeeContactDetails.setEmail(employeeDTO.getEmail());
				employeeContactDetails.setTelephone(employeeDTO.getTelephone());
				SocialMediaAddress socialMediaAddress = new SocialMediaAddress();
				socialMediaAddress.setName(employeeDTO.getMediaName());
				socialMediaAddress.setUrl(employeeDTO.getMediaUrl());
				employee.setSocialMediaAddress(socialMediaAddress);
				employee.setEmployeeContactDetails(employeeContactDetails);
				employee.setEmployeeNumber(String.valueOf(new Date().getTime()));
				employeeDTO.setEmployeeNumber(employee.getEmployeeNumber());
				employeeDao.saveEmployee(employee);
				List<Employee> employees = employeeDao.getAllEmployees();

				Map<String,List<Employee>> map = new HashMap<String,List<Employee>>();
				//map.put("employeeList", employees);
				request.setAttribute("employees",employees);
			} catch (DaoException e) {
				e.printStackTrace();
				return new ModelAndView("404");
			}
		}
		else {
			//Employee exists, update employee
			try {
				employeeDao.updateEmployee(employee);
			} catch (DaoException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				System.out.println("===> Failed to update employee");
			}
		}

			List<EmployeeDTO> list = new ArrayList<EmployeeDTO>();
			list.add(employeeDTO);
			model.addObject("employeeList",list);
			return model;

		}

		@RequestMapping(value = "/getEmployeeDetails/{firstname}", method = RequestMethod.GET)
		public ModelAndView viewEmployee(@PathVariable("firstname") String firstname,HttpServletRequest request) {

			ModelAndView model = new ModelAndView("view");

			System.out.println("====> inside getEmployeeDetails: "+ firstname);
			return model;
		}

		@RequestMapping(value = "/editEmployeeDetails", method = RequestMethod.GET)
		public ModelAndView editEmployee(@RequestParam("employeeNumber") String employeenumber,HttpServletRequest request) {
			System.out.println("===> Inside edit employee controller");
			System.out.println("Employee request: "+employeenumber);


			/*
			 * Get Existing Employee
			 */
			Employee employeeDb = null;
			try {
				employeeDb = employeeDao.getEmployeeByEmployeeNumber(employeenumber);
				System.out.println("===> Employee from db: "+employeeDb.toString());
				
				request.setAttribute("employeeDb",employeeDb);
				
				return new ModelAndView("editemployee");
			} catch (DaoException e) {
				System.out.println("===> Employee not found in edit");
				e.printStackTrace();
				return new ModelAndView("403");
				
			}
		}
		
		@RequestMapping(value = "/displayDetails/{employeeNumber}", method = RequestMethod.GET)
		public ModelAndView displayDetails(@PathVariable("employeeNumber") String employeeNumber,HttpServletRequest request) {

			/*
			 * Get Existing Employee
			 */
			Employee employeeDb = null;
			try {
				employeeDb = employeeDao.getEmployeeByEmployeeNumber(employeeNumber);
				System.out.println("===> Employee from db: "+employeeDb.toString());
				
				request.setAttribute("employeeDb",employeeDb);
				
				return new ModelAndView("editemployee");
			} catch (DaoException e) {
				System.out.println("===> Employee not found in edit");
				e.printStackTrace();
				return new ModelAndView("403");
				
			}
		}
		
		@RequestMapping(value = "/doaddcardController", method = RequestMethod.GET)
		public ModelAndView doaddcardController(@PathVariable("employeeNumber") String employeeNumber,HttpServletRequest request) {				
				return new ModelAndView("doaddcard");
		}
		

	}
