<%@ page language="java" contentType="text/html; charset=ISO-8859-1" import="java.util.*"
    pageEncoding="ISO-8859-1"%>
    <%@ page import = "com.management.employee.dao.model.*" %>
    <%@ page import = "com.management.employee.dao.data.impl.*" %>
<jsp:useBean id="bean" class="com.management.employee.dao.data.impl.EmployeeDaoImpl" scope="session"/>
<jsp:setProperty name="bean" property="*"/>
<%

	
		String userId = request.getParameter("employeeNumber");
out.println("Employee num is : "+userId);
		/* 
		boolean createUserAdditionalCard = bean.updateEmployee(employee);
		if(createUserAdditionalCard){
				User user = bean.getUserByUserId(userId);
				String email = user.getEmail();
				boolean updateCardDetails = bean.updateCard(email,numberOnCard);
				if(updateCardDetails){
					String redirect = response.encodeRedirectUrl("profile.jsp?id="+user.getId());
					response.sendRedirect(redirect);
					//out.println("New card added succesfully!<br>");
					//out.println("<a href='login.jsp'>Back</a>");
				}
		}else{
			out.println("New card could not be added!<br>");
			out.println("<a href='login.jsp'>Back</a>");
		} */
	
	
%>