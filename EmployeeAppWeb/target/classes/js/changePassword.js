var changePassword = angular.module("changePassword",
		['angular-md5']);
changePassword.controller("chPswController",
		function($scope,$location, md5, $http) {
			$scope.savePassword = function() {
				$scope.baseUrl = $location.absUrl().substr(0, $location.absUrl().lastIndexOf("/"));
				var newconfpassNull = true;
				var ispassNull = true;
				if($scope.currpass==null||$scope.newpass==null||$scope.confirmpass==null){
					changePwdAlert("Fields Should Not be Empty");
		    		ispassNull=false;
		    	}

		    	if($scope.newpass!=$scope.confirmpass){
		    		changePwdAlert("Password And Repeat Password Must Be Same");
		    		newconfpassNull=false;
		    	}
		    	if(ispassNull == true && newconfpassNull==true){
				var data = '';
				$scope.currpass = md5.createHash($scope.currpass);
				$scope.newpass = md5.createHash($scope.newpass);
				$scope.confirmpass = md5.createHash($scope.confirmpass);
		            data = {currpass : $scope.currpass,newpass: $scope.newpass,confirmpass: $scope.confirmpass};
			        var config = {
			        	    headers: {'Content-type': 'application/json' },
			        	    'dataType': 'json'
			        	 };
			        var url = $scope.baseUrl+'/loginService/changePassword';
			        $http.post(""+url, data, config)
			        .success(function(data, status, headers,response) {
			        	$scope.success = data;
			        	$scope.currpass = null;
			        	$scope.newpass = null;
			        	$scope.confirmpass = null;
			        	if($scope.success== true){
			        	changePwdAlert("Password Saved Successfully");
			        	}else{
			        	changePwdAlert("Current Password is Invalid");
			        	}
			        		
			        })
			        .error(function(data, status, headers) {
			        	changePwdAlert("ERROR");
			        });
		    	}
			};
		});

function changePwdAlert(msg){
	 var el = document.createElement("div");
	 el.setAttribute("style","width:300px;	height: 100px;position:absolute;top:250px;left:35%;border-radius: 20px;border-style: solid;background-color:#5bc0de;text-align:center;color:white;margin-top: 50px");
	 el.setAttribute("class","center");
	 el.setAttribute("msg","style","text-align:center;");
	 el.innerHTML = msg;
	 setTimeout(function(){
	  el.parentNode.removeChild(el);
	 },2000);
	 document.body.appendChild(el);
	}