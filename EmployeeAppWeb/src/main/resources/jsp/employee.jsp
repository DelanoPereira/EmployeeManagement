<%@ page language="java" contentType="text/html; charset=windows-1256"
	pageEncoding="windows-1256"%>

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
<style>
body {
 background-image: url("/EmployeeAppWeb/src/main/webapp/images/em.jpg");
 background-color: #cccccc;
}
</style>

</head>

<body background="/images/em.jpg">
	
	<div align="center">
	<div class="container">	
	<h1 class="form-heading">Welcome to the Employee Management Portal</h1>
		<div class="login-form">
			<div class="main-div">
				<h3><p>Please enter Employee Details</p></h3>
			
	<form action="saveEmployee" id="saveEmployee" method="GET"
		modelAttribute="employeeForm">

	<div class="form-group">
		<input type="text" id="firstname" placeholder="firstname" name="firstname" /><br>
		<input type="text" id="lastname" placeholder="lastname" name="lastname" /><br>
		<input type="text" id="street" placeholder="street" name="street" /><br>
		<input type="text" id="state" placeholder="state" name="state" /><br>
		<input type="text" id="city" placeholder="city" name="city" /><br>
		<input type="text" id="zip" placeholder="zip" name="zip" /><br>
		<input type="text" id="country" placeholder="country" name="country" /><br>
		<input type="email" id="email" placeholder="email" name="email" /><br>
		<input type="number" id="telephone" placeholder="telephone" name="telephone" /><br>
		<input type="text" id="mediaName" placeholder="mediaName" name="mediaName" /><br>
		<input type="text" id="mediaUrl" placeholder="mediaUrl" name="mediaUrl" /> <br>
		</div>
		<input type="submit" class="btn btn-primary" value="submit">

	</form>
	</div>
	</div>
	</div>

		</div>
</body>
</html>

