package com.management.employee.dao.data.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.management.employee.dao.data.EmployeeDao;
import com.management.employee.dao.data.Status;
import com.management.employee.dao.exception.DaoException;
import com.management.employee.dao.model.Employee;

@Repository
@Transactional
public class EmployeeDaoImpl implements EmployeeDao {

	@Autowired
	private SessionFactory sessionFactory;

	protected Session currentSession() {
		return sessionFactory.getCurrentSession();
	}

	public void saveEmployee(Employee employee) throws DaoException {

		try{
			Session session=currentSession();
			Transaction trans=session.beginTransaction();
			session.saveOrUpdate(employee);
			trans.commit();
		}
		catch(Exception e) {
			Status status = new Status();
			status.setCode("101");
			status.setMessage(e.getMessage());
			throw new DaoException(status);
		}

	}
	
	public Employee getEmployeeByEmployeeNumber(String employeeNumber) throws DaoException {

		try{
			Session session=currentSession();
			Transaction trans=session.beginTransaction();
			Criteria cr = session.createCriteria(Employee.class);
			cr.add(Restrictions.eq("employeeNumber", employeeNumber));
			
			List<Employee> results = (List<Employee>)cr.list();
			trans.commit();
			return results.get(0);
		}
		catch(Exception e) {
			Status status = new Status();
			status.setCode("101");
			status.setMessage(e.getMessage());
			throw new DaoException(status);
		}

	}

	public List<Employee> getAllEmployees() throws DaoException {
		try{
			Session session=currentSession();
			Transaction trans=session.beginTransaction();
			List<Employee> results = session.createCriteria(Employee.class).list();
			trans.commit();
			return results;
		}
		catch(Exception e) {
			Status status = new Status();
			status.setCode("101");
			status.setMessage(e.getMessage());
			throw new DaoException(status);
		}
	}

	public void updateEmployee(Employee employee) throws DaoException {
		try{
			Session session=currentSession();
			Transaction trans=session.beginTransaction();
			session.update(employee);
			trans.commit();
		}
		catch(Exception e) {
			Status status = new Status();
			status.setCode("101");
			status.setMessage(e.getMessage());
			throw new DaoException(status);
		}
		
	}

}
