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
	background-image: url('images/em1.jpg');
	background-size:100%;
}
</style>

</head>

<body>
		<div class="container-login100" style="margin-left:30%;border:1px solide #fff; background-color:#fff;width:40%;margin-top:20px;">
			<div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
				<h3>
					<p>Please enter Employee Details</p>
				</h3>
				<form action="saveEmployee" id="saveEmployee" method="GET" modelAttribute="employeeForm">
					<div class="form-group">
						<input type="text" id="firstname" placeholder="firstname" name="firstname" /><br>
						<input type="text" id="lastname" placeholder="lastname" name="lastname" /><br> 
						<input type="text" id="street" placeholder="street" name="street" /><br>
						<input type="text" id="state" placeholder="state" name="state" /><br>
						<input type="text" id="city" placeholder="city" name="city" /><br>
						<input type="text" id="zip" placeholder="zip" name="zip" /><br>
						<input type="text" id="country" placeholder="country"
							name="country" /><br> <input type="email" id="email"
							placeholder="email" name="email" /><br> <input
							type="number" id="telephone" placeholder="telephone"
							name="telephone" /><br> <input type="text" id="mediaName"
							placeholder="mediaName" name="mediaName" /><br> <input
							type="text" id="mediaUrl" placeholder="mediaUrl" name="mediaUrl" />
						<br>
					</div>
					<input type="submit" class="btn btn-primary" value="submit">

				</form>
			</div>
		</div>

</body>
</html>

