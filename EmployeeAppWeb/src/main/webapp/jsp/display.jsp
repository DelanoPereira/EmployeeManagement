<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<style>
body {
	background-image: url('images/em1.jpg');
	background-size: 100%;
}
</style>
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

	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
				<h2>Employee Details  <%=request.getParameter("firstname") %></h2>



				<table style="margin-left: 25px" id="myTable" name="myTable"
					class="table table-striped table-bordered" width="100%"
					cellspacing="0">
					<thead>
						<tr>
							<th>firstname</th>
							<th>Lastname</th>
							<th>Employee Number</th>
							<th>Street</th>
							<th>State</th>
							<th>City</th>
							<th>Zip</th>
							<th>Country</th>
							<th>Email</th>
							<th>Telephone</th>
							<th>Media Name</th>
							<th>Media Url</th>
							<th>Edit Details</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${employeeList}" var="employee">
							<tr>
								<td><c:out value="${employee.firstName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><a
									href="editEmployeeDetails/<c:out value="${employee.employeeNumber}"/>">
										Edit </a></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>

</html>
