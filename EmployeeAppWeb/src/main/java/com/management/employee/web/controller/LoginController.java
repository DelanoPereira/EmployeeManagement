/**
 * 
 */
package com.management.employee.web.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.management.employee.service.dto.EmployeeDTO;

/**
 * @author Delano
 *
 */
@Controller
public class LoginController {

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login(Model model,HttpServletRequest request) {
		return new ModelAndView("login");
		
	}
	
	@RequestMapping(value = "/authenticate", method = RequestMethod.GET)
	public ModelAndView authenticatLogin(Model model,HttpServletRequest request) {
		 return new ModelAndView("employee", "person-entity", new EmployeeDTO());
	}
	
	@RequestMapping(value = "/dashboard", method = RequestMethod.GET)
	public ModelAndView dashboard(HttpServletRequest request) {
		 return new ModelAndView("dashboard");
	}
	
}
