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
				<h2>All Employee Details</h2>



				<table style="margin-left: 25px" id="myTable" name="myTable"
					class="table table-striped table-bordered" width="100%"
					cellspacing="0">
					<thead>
						<tr>
							<th>firstname</th>
							<th>Lastname</th>
							<th>Contact</th>
							<th>Edit Details</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${employeeList}" var="employee">
							<tr>
								<td><c:out value="${employee.firstName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td><c:out value="${employee.lastName}" /></td>
								<td>
									<form name="editEmployeeDetails" id="editEmployeeDetails">

										<input type="hidden" name="employeeNumber"
											value="<c:out value="${employee.employeeNumber}" />"
											id="employeeNumber"> <input type="button"
											name="update" id="update" value="Edit Details">
									</form>
								</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</body>

<script>
	$(document).ready(function() {
		$('#myTable').DataTable({
			"lengthMenu" : [ [ 10, 50, 100, -1 ], [ 10, 50, 100, "All" ] ],
			"paging" : true,
			"ordering" : false,
			"info" : true,
			"pagingType" : "full_numbers",
			"searching" : true,
			"destroy" : true,
			"bInfo" : false,
			"dom" : '<"top"i>rt<"bottom"flp><"clear">',
		});

	});
</script>

<%--  <td>
        	<form name="editEmployeeDetails" id="editEmployeeDetails"> 
											
											<input type="hidden" name="employeeNumber"
											value="<c:out value="${employee.employeeNumber}" />"
											id="employeeNumber">
					
										<input type="button" name="update" id="update" value="Edit Details">
									</form>
		</td> --%>

<script>
	$('#update').click(
			function() {
				 var employeeNumber = $("#employeeNumber").val();
				 
				$.ajax({
					type : "GET",
					url : "editEmployeeDetails",
					data : "&employeeNumber=" + employeeNumber,
					dataType : "text",
					success : function(data) {
						alert('Successful');
						//alert(data);
						//alert(JSON.stringify(data));
						window.location.href = "displayDetails/"+employeeNumber;
						//location.reload();
					},
					error : function(data) {
						alert('Error occured');
						alert(JSON.stringify(data));
						//location.reload();
						
					}
				}) 
			});
</script>

</html>
