/**
 * 
 */
package com.management.employee.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.management.employee.dao.data.EmployeeDao;
import com.management.employee.dao.data.Status;
import com.management.employee.dao.exception.DaoException;
import com.management.employee.dao.model.Employee;
import com.management.employee.service.EmployeeService;
import com.management.employee.service.exception.ServiceException;

/**
 * @author Delano
 *
 */
@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDao employeeDao;
	
	/* (non-Javadoc)
	 * @see com.management.employee.service.EmployeeService#saveEmployee()
	 */
	public void saveEmployee(Employee employee) throws ServiceException {
		try {
			employeeDao.saveEmployee(employee);
		} catch (DaoException e) {
			Status status = new Status();
			status.setCode("101");
			status.setMessage("Save employee failed. "+ e);
			throw new ServiceException(status);
		}

	}

	/* (non-Javadoc)
	 * @see com.management.employee.service.EmployeeService#editEmployee()
	 */
	public void editEmployee(Employee employee) throws ServiceException {
		/*try {
			employeeDao.update(employee);
		} catch (DaoException e) {
			Status status = new Status();
			status.setCode("101");
			status.setMessage("Edit employee failed. "+ e);
			throw new ServiceException(status);
		}*/

	}

}
