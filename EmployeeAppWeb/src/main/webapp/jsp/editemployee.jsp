<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

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
		<div class="container-login100"
			style="background-image: url('images/em1.jpg');">
			<div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
				<h1 class="form-heading">Please Edit Employee Details</h1>
				<div class="login-form">
					<div class="main-div">
						<div class="panel">

							<p>Edit Employee Details</p>
						</div>

						<%-- <jsp:forward page="display.jsp"> 
<jsp:param name="firstname" value="Delano Edit empl" />
<jsp:param name="lastname" value="Delano Edit empl" />
<jsp:param name="employeeNumber" value="Delano Edit empl" />
<jsp:param name="street" value="Delano Edit empl" />
<jsp:param name="state" value="Delano Edit empl" />
<jsp:param name="city" value="Delano Edit empl" />
<jsp:param name="zip" value="Delano Edit empl" />
<jsp:param name="country" value="Delano Edit empl" />
<jsp:param name="email" value="Delano Edit empl" />
<jsp:param name="telephone" value="Delano Edit empl" />
<jsp:param name="mediaName" value="Delano Edit empl" />
<jsp:param name="mediaUrl" value="Delano Edit empl" />
</jsp:forward>  --%>

						<form action="doaddcardController" method="GET">

							<div class="form-group">
								<input type="text" id="firstname" name="firstname"
									value=<c:out value="${employeeDb.firstName}"/>><br>
								<input type="text" id="lastname" name="lastname"
									value=<c:out value="${employeeDb.lastName}"/>><br>
								<input type="text" id="street" name="street"
									value=<c:out value="${employeeDb.employeeAddress.street}"/>><br>
								<input type="text" id="state" name="state"
									value=<c:out value="${employeeDb.employeeAddress.state}"/>><br>
								<input type="text" id="city" name="city"
									value=<c:out value="${employeeDb.employeeAddress.city}"/>><br>
								<input type="text" id="zip" name="zip"
									value=<c:out value="${employeeDb.employeeAddress.zipCode}"/>><br>
								<input type="text" id="country" name="country"
									value=<c:out value="${employeeDb.employeeAddress.country}"/>><br>
								<input type="email" id="email" name="email"
									value=<c:out value="${employeeDb.employeeContactDetails.email}"/>><br>
								<input type="number" id="telephone" name="telephone"
									value=<c:out value="${employeeDb.employeeContactDetails.telephone}"/>><br>
								<input type="text" id="mediaName" name="mediaName"
									value=<c:out value="${employeeDb.socialMediaAddress.name}"/>><br>
								<input type="text" id="mediaUrl" name="mediaUrl"
									value=<c:out value="${employeeDb.socialMediaAddress.url}"/>>
								<br> <input type="hidden" id="employeeNumber"
									name="employeeNumber"
									value=<c:out value="${employeeDb.employeeNumber}"/>> <br>
							</div>
							<input type="submit" class="btn btn-primary" value="submit">

						</form>
					</div>

				</div>
			</div>
		</div>
	</div>


</body>

<!-- <script>
	$('#button').click(
			function() {
				 /* var employeeNumber = $("#employeeNumber").val(); */
				 
				$.ajax({
					type : "GET",
					url : "updateEmployee",
					data : "",
					dataType : "text",
					success : function(data) {
						alert('Successful inside update');
						//alert(data);
						//alert(JSON.stringify(data));
						//window.location.href = "displayDetails/"+employeeNumber;
						//location.reload();
					},
					error : function(data) {
						alert('Error occured');
						//alert(JSON.stringify(data));
						//location.reload();
						
					}
				}) 
			});
</script> -->

</html>

