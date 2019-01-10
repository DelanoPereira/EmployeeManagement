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

<div align="center">
	<div class="container">	
<h2>All Employee Details</h2>



<table style="margin-left:25px" id="myTable" name="myTable"
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
        <td><c:out value="${employee.firstname}"/></td>
        <td><c:out value="${employee.lastname}"/></td>
        <td><c:out value="${employee.email}"/></td>
      <%--   <td><a href="editEmployeeDetails/<c:out value="${employee.employeeNumber}"/>"> Edit </a></td> --%>  
         <td>
        	<form name="editEmployeeDetails" id="editEmployeeDetails"> 
											
											<input type="hidden" name="employeeNumber"
											value="<c:out value="${employee.employeeNumber}" />"
											id="employeeNumber">
					
										<input type="button" name="update" id="update" value="Edit Details">
									</form>
		</td>
    </tr>
</c:forEach>
</tbody>
</table>
</div>
</div>
</body>

<script>
$(document).ready(function() {
    $('#myTable').DataTable({
		"lengthMenu": [[10, 50, 100, -1], [10, 50, 100, "All"]],
		"paging":   true,
        "ordering": false,
        "info":     true,
        "pagingType": "full_numbers",
        "searching": true,
    	"destroy": true,
    	"bInfo" : false,
    	"dom": '<"top"i>rt<"bottom"flp><"clear">',
    });
    
} );
</script>

<!-- <script>
	$('#update').click(
			function() {
				 var firstname = $("#employeeName").val();
				 var lastname = $("#employeeLastName").val();
				 alert('Firstname: '+firstname+':'+lastname);
				$.ajax({
					type : "POST",
					url : "editEmployeeDetails",
					data : "&firstname=" + firstname+"&lastname=" + lastname,
					dataType : "text",
					success : function(data) {
						alert('Successful');
						//alert(JSON.stringify(data));
						//window.location.href = "/EmployeeManagementWeb/editEmployeeDetails";
						location.reload();
					},
					error : function(data) {
						alert('Error occured');
						alert(JSON.stringify(data));
						//location.reload();
						
					}
				}) 
			});
</script> -->

</html>
