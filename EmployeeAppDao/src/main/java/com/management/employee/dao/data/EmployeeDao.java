/**
 * 
 */
package com.management.employee.dao.data;

import java.util.List;

import com.management.employee.dao.exception.DaoException;
import com.management.employee.dao.model.Employee;

/**
 * @author Delano
 *
 */
public interface EmployeeDao {

	public void saveEmployee(Employee employee) throws DaoException; 
	
	public Employee getEmployeeByEmployeeNumber(String employeeNumber) throws DaoException;
	
	public List<Employee> getAllEmployees() throws DaoException;
	
	public void updateEmployee(Employee employee) throws DaoException;
}
