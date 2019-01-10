<%@ page language="java" contentType="text/html; charset=windows-1256"
	pageEncoding="windows-1256"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type"
	content="text/html; charset=windows-1256">
<title>Employee Management</title>

<link
	href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
	rel="stylesheet" id="bootstrap-css">
<script
	src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script
	src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->


</head>

<body>
	<div align="center">
	<div class="container">	
	<h1 class="form-heading">Please Edit Employee Details</h1>
		<div class="login-form">
			<div class="main-div">
				<div class="panel">
					
					<p>Edit Employee Details</p>
				</div>
				

	<form action="updateEmployee" id="updateEmployee" method="GET"
		modelAttribute="updateEmployeeForm">

	<div class="form-group">
		<input type="text" id="firstname" placeholder=<c:out value="${employeeDb.firstName}"/> name="firstname" value=<c:out value="${employeeDb.firstName}"/>><br>
		<input type="text" id="lastname" placeholder=<c:out value="${employeeDb.lastName}"/> name="lastname" value=<c:out value="${employeeDb.lastName}"/>><br>
		<input type="text" id="street" placeholder="street" name="street" value=<c:out value="${employeeDb.employeeAddress.street}"/>><br>
		<input type="text" id="state" placeholder="state" name="state" value=<c:out value="${employeeDb.employeeAddress.state}"/>><br>
		<input type="text" id="city" placeholder="city" name="city" value=<c:out value="${employeeDb.employeeAddress.city}"/>><br>
		<input type="text" id="zip" placeholder="zip" name="zip" value=<c:out value="${employeeDb.employeeAddress.zipCode}"/>><br>
		<input type="text" id="country" placeholder="country" name="country" value=<c:out value="${employeeDb.employeeAddress.country}"/>><br>
		<input type="email" id="email" placeholder="email" name="email" value=<c:out value="${employeeDb.employeeContactDetails.email}"/>><br>
		<input type="number" id="telephone" placeholder="telephone" name="telephone" value=<c:out value="${employeeDb.employeeContactDetails.telephone}"/>><br>
		<input type="text" id="mediaName" placeholder="mediaName" name="mediaName" value=<c:out value="${employeeDb.socialMediaAddress.name}"/>><br>
		<input type="text" id="mediaUrl" placeholder="mediaUrl" name="mediaUrl" value=<c:out value="${employeeDb.socialMediaAddress.url}"/>> <br>
		<input type="hidden" id="employeeNumber" name="employeeNumber" value=<c:out value="${employeeDb.employeeNumber}"/>> <br>
		</div>
		<input type="submit" class="btn btn-primary" value="submit">

	</form>
	</div>

		</div>
	</div>
	</div>


</body>
</html>

