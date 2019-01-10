package com.management.employee.dao.exception;

import com.management.employee.dao.data.Status;


public class DaoException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Status status;

	public DaoException(Status status) {
		super(status.getMessage());
		this.status = status;

	}

	/**
	 * @return the status
	 */
	public Status getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(Status status) {
		this.status = status;
	}

	/**
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("ServiceException [status=").append(status).append("]");
		return builder.toString();
	}

}
