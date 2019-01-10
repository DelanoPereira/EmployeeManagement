<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>

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
<h2>Employee with Below Details Saved Succesfully</h2>

		<!-- <ul> -->
			<c:forEach var="listValue" items="${employeeList}">
			<table border="1">
				<tr>
					<th>Name</th>
					<th>Surname</th>
					<th></th>
				</tr>
				<tr>
					<td>${listValue.firstname}</td>
					<td>${listValue.lastname}</td>
					<td><a href="getEmployeeDetails">View</a></td>
				</tr>
			</table>
			
			</c:forEach>
		<!-- </ul> -->


</body>
</html>
