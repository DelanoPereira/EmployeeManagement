/**
 * 
 */
package com.management.employee.service;

import com.management.employee.dao.model.Employee;
import com.management.employee.service.exception.ServiceException;

/**
 * @author Delano
 *
 */
public interface EmployeeService {

	public void saveEmployee(Employee employee) throws ServiceException;
	
	public void editEmployee(Employee employee) throws ServiceException;
}
