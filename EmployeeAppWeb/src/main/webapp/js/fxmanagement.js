/* * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.*/
var app = angular.module('forexmanagment', ['720kb.datepicker','ngRoute']);
app.directive('onLastRepeat', function() {
    return function(scope, element, attrs) {
        if (scope.$last) setTimeout(function(){
            scope.$emit('onRepeatLast', element, attrs);
        }, 1);
    };
});

app.directive('loading',   ['$http' ,function ($http)
                         {
                             return {
                                 restrict: 'A',
                                 link: function (scope, elm, attrs)
                                 {
                                     scope.isLoading = function () {
                                         return $http.pendingRequests.length > 0;
                                     };

                                     scope.$watch(scope.isLoading, function (v)
                                     {
                                         if(v){
                                             elm.css('display', 'block');
                                         } else {
                                             elm.css('display', 'none');
                                         }
                                     });
                                 }
                             };

                         }]);

function validateManualRate(manualRate,previousSystemRate){
	var message="";
	
	if(manualRate == ""){
		message="Manual Rate is empty";
	}else if(parseFloat(manualRate) == 'NaN' || parseFloat(manualRate) <= 0){
		message="Manual Rate is not valid or Rate value must be greater than 0 and maximum 4 decimals";
		
	}else if(manualRate == previousSystemRate || manualRate == undefined){
		message="No change found";
	}else if(!checkDecimalsCounts(parseFloat(manualRate))){
		message="Rate value must be greater than 0 and maximum 4 decimals ";
	}
	
	return message;
}

app.controller('profile2',function($scope,$http,$location,name)
			{
		$scope.name=name;
		 $scope.baseUrl = $location.absUrl().substr(0, $location.absUrl().lastIndexOf("/"));
		 var urlProfile = $scope.baseUrl+'/loginService/getProfile?username=';
		
				$http.get(""+urlProfile+name).then(function(response)
						{
							$scope.profiledata=response.data;
						});
				});

app.controller("systemPivoteCCY", function($scope,$http,$location) {
	$scope.$on('onRepeatLast', function(scope, element, attrs){


		var c = $(".systemPivoteClass");
		var ctx;
		for(var i=0;i<c.length;i++){
		 ctx = c[i].getContext("2d");
		 ctx.beginPath();
		    ctx.moveTo(100,0);
		    ctx.lineTo(0,0);
		    ctx.lineTo(-1,50);
		ctx.fillStyle = "#c5dcef";
		    ctx.fill();
		 ctx.font = "12px serif";
//		 ctx.fillStyle = "#6ba5d8";
		    ctx.textAlign = "center";
		    ctx.strokeText($scope.items[i].SPCtoFx, 50, 25); 

		ctx.stroke();
	 }
		
    });
	
    $scope.bid = "";
    $scope.mid = "";
    $scope.ask = "";
    $scope.items = [];
    $scope.item = null;
    $scope.currency="";
    $scope.baseUrl = $location.absUrl().substr(0, $location.absUrl().lastIndexOf("/"));

    $scope.getdata  = function() {
    	 	var url =  $scope.baseUrl+'/ratesService/getRatesDisplayInfoService?isRateTypeSend=true';
    		$http.get(""+url).then(function(response){
        		$scope.items = response.data;
        	},
        	function(errResponse){
        		item.errResponse = "Record not found ";
            });
    		
    		return false;
    };
    	
  
    $scope.getdata();
    	
    $scope.systemRatesCCY  = function(bid,mid,ask,item,index) {
    	
//    	var autoflag = item.IsAutoUpdate;
    	var ex_bid = item.BID;
    	var ex_mid = item.MID;
    	var ex_ask = item.ASK;
//    	var presetflag = item.IsPreUpdated;
    	$scope.serverresponse = "";
   	 	$scope.success = "";
   	 $scope.items[index].success ="";
   	 $scope.items[index].errResponse="";
   	 	$scope.serverres = validateNochangeMade(bid,mid,ask,item);
	
   	
   		if(!($scope.serverres == "No Change Found")){
   			$scope.serverres = validateRateValues(bid,mid,ask,item);
   		}
 
	
   	var currency = item.SPCtoFx;
   	var id= item.ID;
   	if($scope.serverres == "" || $scope.serverres == undefined){
   		
   		var data = '';
   	
		if (bid == "" || bid == "-") {
			bid = parseFloat(ex_bid);
		}
		if (mid == "" || mid == "-") {
		mid = parseFloat(ex_mid);
		}
		if (ask == "" || ask == "-") {
		ask = parseFloat(ex_ask);
		}
   
   		data = {id:id,currency : currency,rates : {bid : bid,mid : mid,ask : ask},rateType : "systemPivote"};
		
   		var url =  $scope.baseUrl+'/ratesService/applyRates';
		
   		var config = {
   				headers: {'Content-type': 'application/json' },
   				'dataType': 'json'
   		};
   		var http = $http.post(""+url, data,config).then(function(response){
   			$scope.success = response.data.responseMessage;
   			$scope.item.success = $scope.success;
   			$scope.items = response.data.ratesDisplayList;
   			$scope.items[index].success = $scope.success;
//   			$scope.item.response =$scope.item.success;
   			//$scope.serverresponse = response.data.responseMessage;
   			
   			window.location.reload();
   		}, 
   		function(errResponse){
   			$scope.serverres = "Rates Not Updated";
   			
   		});
   	}
   	if(!($scope.serverres == "")){
   		$scope.success = "";
   	}else if(!($scope.success == "")){
   		$scope.serverres = "";
   	}

   	$scope.item = $scope.items[index];
   	$scope.item.errResponse = $scope.serverres;
   	$scope.items[index] = $scope.item;
	
};
	
	
});

app.controller("crossRateController", function($scope,$http,$location) {
	
	$scope.$on('onRepeatLast', function(scope, element, attrs){

		var c = $(".crossRateClass");
		var ctx;
		for(var i=0;i<c.length;i++){
		 ctx = c[i].getContext("2d");
		 ctx.beginPath();
		    ctx.moveTo(100,0);
		    ctx.lineTo(0,0);
		    ctx.lineTo(-1,50);
		ctx.fillStyle = "#c5dcef";
		    ctx.fill();
		 ctx.font = "12px serif";
		    ctx.textAlign = "center";
		    ctx.strokeText($scope.items[i].SPCtoFx, 50, 20); 

		ctx.stroke();
	 }
		
    });
	
   $scope.item = "";
    $scope.items = [];
    $scope.baseUrl = $location.absUrl().substr(0, $location.absUrl().lastIndexOf("/"));
   
    $scope.crossRateUpdation  = function(manualRate,item,index) {
	

    	 $scope.item = item;
    	 $scope.success = "";
    	 
    	 $scope.serverresponse = "";
    	 $scope.items[index].success="";
    	 $scope.items[index].errResponse="";
    	$scope.serverres = validateManualRate(manualRate,item.SystemRate);
    	var id= item.ID;
    	var currency = item.SPCtoFx;
    	
    	if($scope.serverres == "" || $scope.serverres == undefined){
    	   	 
    		var data = '';
		
    		data = {id:id,currency : currency,manualRate:manualRate,rateType : "crossRate",isRatesLock:item.IsLock};
		
    		var url =  $scope.baseUrl+'/ratesService/applyRates';
		
    		var config = {
    				headers: {'Content-type': 'application/json' },
    				'dataType': 'json'
    		};
    		var http = $http.post(""+url, data,config).then(function(response){
			$scope.success = response.data.responseMessage;
			$scope.item.success = $scope.success;
    		$scope.serverresponse = response.data.responseMessage;
    		$scope.items = response.data.ratesDisplayList;
    		$scope.items[index].success=$scope.success;
//    		tempAlert(item.success);
    		location.reload();
    		}, 
    		function(errResponse){
    			$scope.serverres = "CrossRate Not Updated";
    		});
    	}
	
    	
    	
    	
    	if(!($scope.serverres == "")){
    		$scope.success = "";
    	}else if(!($scope.success == "")){
    		$scope.serverres = "";
    	}
    	$scope.item.errResponse = $scope.serverres;
    	$scope.item.success = $scope.success;
    	
};
    
    $scope.getdata  = function() {
    	
    	var url =  $scope.baseUrl+'/ratesService/getRatesDisplayInfoService?isRateTypeSend=false';
    	
		$http.get(""+url).then(function(response){
        		$scope.items = response.data;
        	},
        	function(errResponse){
        		item.errResponse = "CrossRate not Found ";
            });
		
    	};
    	$scope.getdata();
	});

app.controller("margin", function($scope, $http, $location) {
	$scope.margin = "";
	$scope.rows = [];
	$scope.row = "";
	$scope.PartnerList = [];
	$scope.partnercode = "";

	$scope.baseUrl = $location.absUrl().substr(0,
			$location.absUrl().lastIndexOf("/"));
	$('#margin_tb').hide();
	$scope.getPartnerList = function() {
		var url = $scope.baseUrl + '/marginService/getPartnerListMargin';

		$http.get("" + url).then(function(response) {

			$scope.PartnerList = response.data;
		}, function(errResponse) {
			$scope.serverres = "Partners not Found ";

		});
	};

	$scope.getPartnerList();

	$scope.loadFeeds = function(drpdpwnvalue) {
		
		if (drpdpwnvalue == undefined || drpdpwnvalue == null || drpdpwnvalue == 'NaN') {
			$('#margin_tb').hide();
			$scope.serverres = "";
		} else {
			var url = $scope.baseUrl
					+ '/marginService/getPartnerMargin?partnerCode=';

			$http.get("" + url + drpdpwnvalue.partnerCode).then(
					function(response) {
						if(response.data == null || response.data == undefined || response.data == 'NaN' || response.data == ""){
							$('#margin_tb').hide();
							$scope.serverres = "No Currency Found";
						}else{
						$scope.rows = response.data;
						$('#margin_tb').show();
						}
					}, function(errResponse) {
						$scope.serverres = "Data Not Found";
					});

		}
		$scope.partnercode = drpdpwnvalue.partnerCode;
	};

	$scope.callBackRes = function() {
		var partnercodevar = $scope.partnercode;
		if (partnercodevar == undefined && partnercodevar == null) {
			$('#margin_tb').hide();
		} else {
			var url = $scope.baseUrl
					+ '/marginService/getPartnerMargin?partnerCode=';

			$http.get("" + url + partnercodevar).then(function(response) {

				$scope.rows = response.data;
			}, function(errResponse) {
				$scope.serverres = "No Change Found";
			});
			$('#margin_tb').show();
		}
	};

	$scope.sendmargin = function(margin, row, drpdpwnvalue,index) {

		$scope.row = row;
		$scope.success = "";
		$scope.serverresponse = "";
		$scope.rows[index].success="";
		$scope.rows[index].errResponse="";
		$scope.serverresponse = validatemargin(margin);

		if ($scope.serverresponse == "" || $scope.serverresponse == undefined) {
			var data = '';
			var sendPCode = drpdpwnvalue.partnerCode;
			var receivePCode = row.ReceivePartner;
			var systemRate = row.SystemRate;
			var clientRate = row.ClientRate;
			var FxPair=row.FxPair;
			data = {
				sendPCode : sendPCode,
				receivePCode : receivePCode,
				systemRate : systemRate,
				clientRate : clientRate,
				margin : margin,
				toAndFromCurr:FxPair
			};
			var config = {
				headers : {
					'Content-type' : 'application/json'
				},
				'dataType' : 'json'
			};

			var url = $scope.baseUrl + '/marginService/updatePartnerMargin';

			var http = $http.post("" + url, data, config).then(
					function(response) {
						$scope.success = response.data.responseMessage;
						$scope.row.success = $scope.success;
						
						$scope.rows = response.data.partnerMarginDTOList;
						$scope.rows[index].success=$scope.success;
					}, function(errResponse) {
						$scope.errResponse = "Margin Rate Not Updated";
					});
		}

		if (!($scope.serverresponse == "")) {
			$scope.success = "";
		} else if (!($scope.success == "")) {
			$scope.serverresponse = "";
		}

		$scope.row.errResponse = $scope.serverresponse;
		$scope.row.success = $scope.success;

	};
});
app.controller("currency",['$scope','$route','$http' ,'$location',
		function($scope,$route, $http, $location) {
	
	var gloablVar="";
		
			$scope.baseUrl = $location.absUrl().substr(0,
					$location.absUrl().lastIndexOf("/"));
	gloablVar=$scope.baseUrl;
	
			$scope.getcurrencyData = function() {

				var url = $scope.baseUrl + '/masterdata/getCurrencies';
				$http.get("" + url).then(function(response) {
					$scope.items = response.data;
					$scope.delSuccess="";
				}, function(errResponse) {
					item.errResponse = "Currencies not Found ";
					$scope.delSuccess="";
				});
			};

			$scope.updatecurrency = function(item, currencysymbol,
					currencydescription,items, index) {
				var currencycode = item.currencycode;
				var currencysymbol1 = currencysymbol;
				var currencydescription1 = currencydescription;
				var currencysymbol2 = item.currencysymbol;
				var currencydescription2 = item.currencydescription;
				if(currencydescription == undefined){
					currencydescription1 = item.currencydescription;
				}
				if(currencysymbol == undefined){
					currencysymbol1 = item.currencysymbol;
				}
				//alert(currencydescription);
				$scope.serverresponse = validateupdatecurrency(currencysymbol1,currencysymbol2,currencydescription1,currencydescription2);
				if ($scope.serverresponse == ""
						|| $scope.serverresponse == undefined) {
				data = {
					currencycode : currencycode,
					currencysymbol : currencysymbol1,
					currencydescription : currencydescription1
				};
				var config = {
					headers : {
						'Content-type' : 'application/json'
					},
					'dataType' : 'json'
				};

				var url = $scope.baseUrl + '/masterdata/updateCurrency';

				var http = $http.post("" + url, data, config).then(
						function(response) {
							$scope.success = response.data.responseMessage;
							// alert($scope.success);
							$scope.item.success=$scope.success;
							//$scope.getcurrencyData();
						}, function(errResponse) {
							$scope.errResponse = "Currency Not Updated";
						});
				}
				if (!($scope.serverresponse == "")) {
					$scope.success = "";
				} else if (!($scope.success == "")) {
					$scope.serverresponse = "";
				}
				//$scope.errResponse = $scope.serverresponse;
				
				$scope.item = $scope.items[index];
			   	$scope.item.errResponse = $scope.serverresponse;
			   	$scope.items[index] = $scope.item;
			   	
				$scope.success = $scope.success;
			};

			$scope.addcurrency = function(currencycode, currencydescription) {
				$scope.success = "";
				$scope.serverresponse = "";
				var currencycode_add = currencycode;
				var currencydescription_add = currencydescription;
				
				$scope.serverresponse = validatecurrency(currencycode_add,
						currencydescription_add);
				if ($scope.serverresponse == ""
						|| $scope.serverresponse == undefined) {
					data = {
						currencysymbol : currencycode_add,
						currencydescription : currencydescription_add
					};
					var config = {
						headers : {
							'Content-type' : 'application/json'
						},
						'dataType' : 'json'
					};

					var url = $scope.baseUrl + '/masterdata/addCurrency';

					var http = $http.post("" + url, data, config).then(
							function(response) {
								$scope.success = response.data.responseMessage;
								//alert($scope.success);
								if($scope.success == null){
									$scope.errResponse_add = "Duplicate Currency Found";
								}else{
									$scope.success_add = $scope.success;
									window.location.reload();
								}
								
								$scope.currencycode1="";
								$scope.currencydescription1="";
							}, function(errResponse) {
								$scope.error = response.data.errResponse;
								$scope.errResponse = "Currency Not Updated";
							});
				}
				if (!($scope.serverresponse == "")) {
					$scope.success = "";
				} else if (!($scope.success == "")) {
					$scope.serverresponse = "";
				}
					$scope.errResponse_add = $scope.serverresponse;
					$scope.success_add = $scope.success;
			};
			
			$scope.deletecurrency = function(item, currencysymbol,
					currencydescription,items,index) {
				var currencycode = item.currencycode;
				var currencysymbol = currencysymbol;
				var currencydescription = currencydescription;
				//alert($scope.serverresponse);
				
				/*if ($scope.serverresponse == ""
					|| $scope.serverresponse == undefined) {*/
				data = {
					currencycode : currencycode,
					currencysymbol : currencysymbol,
					currencydescription : currencydescription
				};
				var config = {
					headers : {
						'Content-type' : 'application/json'
					},
					'dataType' : 'json'
				};
				var url = $scope.baseUrl + '/masterdata/deleteCurrency';
				var http = $http.post("" + url, data, config).then(
						function(response) {
							$scope.success = response.data.responseMessage;
							if ($scope.success == null) {
								$scope.item.errResponse = "Currency Can't Deleted Due To Dependency";
								$scope.success == "";
							}else{
								$scope.delSuccess = $scope.success;
								//window.location.reload();
								$scope.getcurrencyData();
							}
						}, function(errResponse) {
							$scope.errResponse = "Currency Not Updated";
						});
				//}
				$scope.item = $scope.items[index];
			   //	$scope.item.errResponse = $scope.serverresponse;
			   	$scope.items[index] = $scope.item;
			};
		}]);

app.controller("partner", function($scope, $http, $location) {
	$scope.baseUrl = $location.absUrl().substr(0,
			$location.absUrl().lastIndexOf("/"));

	$scope.getcurrencyData = function() {

		var url = $scope.baseUrl + '/masterdata/getCurrencies';
		$http.get("" + url).then(function(response) {
			$scope.CurrencyList = response.data;
		}, function(errResponse) {
			CurrencyList.errResponse = "Currencies not Found ";
		});
	};
	$scope.getcurrencyData();

	$scope.getcountryData = function() {

		var url = $scope.baseUrl + '/masterdata/getCountry';
		$http.get("" + url).then(function(response) {
			$scope.CountryList = response.data;
			
		}, function(errResponse) {
			CountryList.errResponse = "Country not Found ";
		});
	};
	$scope.getcountryData();

	$scope.getpartnerData = function() {

		var url = $scope.baseUrl + '/masterdata/getPartner';
		$http.get("" + url).then(function(response) {
			$scope.itemss = response.data;
		}, function(errResponse) {
			itemss.errResponse = "Partner not Found ";
		});
	};
	$scope.getpartnerData();
	$scope.removeAllCurrencies=function(){
		$scope.multiCurrency=$scope.multiCurrency1="";
	};
$scope.addMultipleCurrenciesToPartner=function(currencysymbol){
	$scope.currencyErrResponse ="";
	if(currencysymbol==undefined || currencysymbol == "Select Partner Currency"){
		$scope.currencyErrResponse ="Please select atleast one currency";
	}else{
		if($scope.multiCurrency1==undefined || $scope.multiCurrency1==""){
			$scope.multiCurrency1=currencysymbol;
		}else{
		  $scope.multiCurrency1=$scope.multiCurrency1+","+currencysymbol;
		}
		$scope.multiCurrency=$scope.multiCurrency1;
	}
};
	$scope.addpartner = function(partnercode1, partnername1, operatorname1,
			partnercurrency1, partnercountry1) {
		var partnercode2 = partnercode1;
		var partnername2 = partnername1;
		var operatorname2 = operatorname1;
		var partnercurrency2 = partnercurrency1;
		var partnercountry2 = partnercountry1;

		$scope.serverresponse = validatepartner(partnername2, partnercode2,
				operatorname2, partnercurrency2, partnercountry2);
		if ($scope.serverresponse == "" || $scope.serverresponse == undefined) {
			data = {
				partnercode : partnercode2,
				partnername : partnername2,
				operatorname : operatorname2,
				partnercurrencyName : partnercurrency2,
				partnercountryName : partnercountry2
			};
			var config = {
				headers : {
					'Content-type' : 'application/json'
				},
				'dataType' : 'json'
			};

			var url = $scope.baseUrl + '/masterdata/addPartner';

			var http = $http.post("" + url, data, config).then(
					function(response) {
						$scope.success = response.data.responseMessage;
						if($scope.success == null){
							$scope.errResponse = "Duplicate Partner Found";
						}else{
							$scope.success = $scope.success;
							//window.location.reload();
						}
						$scope.partnercode1="";
						$scope.partnername1="";
						$scope.operatorname1="";
						$scope.Country="";
						$scope.multiCurrency1="";
						$scope.multiCurrency="";
					}, function(errResponse) {
						$scope.errResponse = "Partner Not Updated";
					});
		}
		if (!($scope.serverresponse == "")) {
			$scope.success = "";
		} else if (!($scope.success == "")) {
			$scope.serverresponse = "";
		}
			$scope.errResponse = $scope.serverresponse;
			//tempAlert($scope.errResponse);
			$scope.success = $scope.success;
	};

	$scope.updatepartner = function(item, partnercode, partnername,
			operatorname, partnercurrency, partnercountry,itemss,index) {
		$scope.item = "";
		var partnercode1 = partnercode;
		var partnercode2 = item.partnercode;
		var partnername1 = partnername;
		var partnername2 = item.partnername;
		var operatorname1 = operatorname;
		var operatorname2 = item.operatorname;
		var partnercurrency1 = partnercurrency;
		var partnercountry1 = partnercountry;
		var partnerid = item.partnerid;
		if(partnercode1 == undefined){
			partnercode1 = item.partnercode;
		}
		if(partnername1 == undefined){
			partnername1 = item.partnername;
		}
		if(operatorname1 == undefined){
			operatorname1 = item.operatorname;
		}
		$scope.serverresponse = validateupdatepartner(partnercode1,partnercode2,
				partnername1,partnername2,operatorname1,operatorname2,itemss);
		
		if ($scope.serverresponse == ""
				|| $scope.serverresponse == undefined) {
		data = {
			partnerid : partnerid,
			partnercode : partnercode1,
			partnername : partnername1,
			operatorname : operatorname1,
			partnercurrencyName : partnercurrency1,
			partnercountryName : partnercountry1
		};
		var config = {
			headers : {
				'Content-type' : 'application/json'
			},
			'dataType' : 'json'
		};

		var url = $scope.baseUrl + '/masterdata/updatePartner';

		var http = $http.post("" + url, data, config).then(function(response) {
			$scope.item.success = response.data.responseMessage;
			$scope.item.success = "Record Updated";
		}, function(errResponse) {
			$scope.errResponse = "Partner Not Updated";
		});
		}
		if (!($scope.serverresponse == "")) {
			$scope.success = "";
		} else if (!($scope.success == "")) {
			$scope.serverresponse = "";
		}
		$scope.item = $scope.itemss[index];
	   	$scope.item.errResponse = $scope.serverresponse;
	   	$scope.itemss[index] = $scope.item;
	};

	$scope.deletepartner = function(item, partnercode,index) {
		$scope.item = "";
		$scope.item.partdelSuccess ="";
		var partnerid = item.partnerid;
		var partnercode1 = partnercode;

		data = {
			partnerid : partnerid,
			partnercode : partnercode
		};
		var config = {
			headers : {
				'Content-type' : 'application/json'
			},
			'dataType' : 'json'
		};

		var url = $scope.baseUrl + '/masterdata/deletePartner';

		var http = $http.post("" + url, data, config).then(function(response) {
			$scope.success = response.data.responseMessage;
			//alert($scope.success);
			if ($scope.success == null) {
				$scope.item.errResponse = "Partner Can't Deleted Due To Dependency";
				$scope.success == "";
			}else{
				$scope.item.partdelSuccess = $scope.success;
				//window.location.reload();
				$scope.getpartnerData();
			}
		}, function(errResponse) {
			$scope.errResponse = "Currency Not Updated";
		});

		if (!($scope.serverresponse == "")) {
			$scope.success = "";
		} else if (!($scope.success == "")) {
			$scope.serverresponse = "";
		}
		
		$scope.item = $scope.itemss[index];
	   	//$scope.item.errResponse = $scope.serverresponse;
	   	$scope.itemss[index] = $scope.item;
	};

});

app.controller("report", function($scope, $http, $location) {
	$scope.baseUrl = $location.absUrl().substr(0,
			$location.absUrl().lastIndexOf("/"));

	$scope.exportpdf = function(fromdate, todate, pdf) {
		var fromdate1 = fromdate;
		var todate1 = todate;
		var filetype1 = pdf;
		$scope.serverresponse = validateexportpdf(fromdate1,todate1);
		if($scope.serverresponse == "" || $scope.serverresponse == undefined){
		var url = $scope.baseUrl + '/masterdata/MFSRateHistoryInPDF?fromDate='
				+ fromdate + '&toDate=' + todate + '&fileType=PDF';
		window.location.assign(url);
		$scope.fromDate = "";
		$scope.toDate = "";
		}
		$scope.errResponse2 = $scope.serverresponse;
	};
	
	$scope.exportcsv = function(fromdate, todate, pdf) {
		var fromdate1 = fromdate;
		var todate1 = todate;
		var filetype1 = pdf;
		$scope.serverresponse = validateexportpdf(fromdate1,todate1);
		if($scope.serverresponse == "" || $scope.serverresponse == undefined){
		var url = $scope.baseUrl + '/masterdata/MFSRateHistoryInCSV?fromDate='
				+ fromdate + '&toDate=' + todate + '&fileType=CSV';
		window.location.assign(url);
		$scope.fromDate = "";
		$scope.toDate = "";
		}
		$scope.errResponse2 = $scope.serverresponse;
	};

	$scope.searchcurrency = function(fromcurrency, tocurrency, range) {
		var fromcurrency1 = fromcurrency;
		var tocurrency1 = tocurrency;
		var range1 = range;
		$scope.serverresponse = validatecurrencyRate(fromcurrency1,tocurrency1,range1);
		if($scope.serverresponse == "" || $scope.serverresponse == undefined){
		var url = $scope.baseUrl
				+ '/masterdata/getCurrencyRateByRange?fromCurrency='
				+ fromcurrency1 + '&toCurrency=' + tocurrency1 + '&dateRange='
				+ range1 + '';
		$http.get("" + url).then(function(response) {
			if (response.data == "" || response.data == undefined || response.data == 'NaN' || response.data == null) {
				$('#CurrencyRate1').hide();
				$scope.errResponse1 = "No Record Found";
				}else{
					$scope.items = response.data;
					$('#CurrencyRate1').show();
				}
			
		}, function(errResponse) {
			items.errResponse1 = "Result not Found ";
		});
		}
		$scope.errResponse1 = $scope.serverresponse;
		$scope.success = $scope.success;
	};
	
	$scope.getcurrencyData = function() {

		var url = $scope.baseUrl + '/masterdata/getCurrencies';
		$http.get("" + url).then(function(response) {
			$scope.CurrencyList = response.data;
		}, function(errResponse) {
			CurrencyList.errResponse = "Currencies not Found ";
		});
	};
	$scope.getcurrencyData();
	        $scope.historicalRate  = function(fromDate1,toDate1,currency,index) {
			 	var fromDate2 = fromDate1;
			 	var toDate2 = toDate1;
			 	var currency = currency;
			 	$scope.serverresponse = "";
				$scope.serverresponse = validateHistoricalRates(fromDate2,toDate2,currency);
				if($scope.serverresponse == "" || $scope.serverresponse == undefined){
			 	
		    	var url =  $scope.baseUrl+'/ratesService/getHistoricalRates?fromDate='+fromDate2+'&toDate='+toDate2+'&currency='+currency;
		    	
				$http.get(""+url).then(function(response){
					if (response.data == "" || response.data == undefined || response.data == 'NaN' || response.data == null) {
		        	$('#HistoricalRate1').hide();
		        	$scope.errResponse = "No Record Found";
					}else{
						$scope.itemss = response.data;
			        	$('#HistoricalRate1').show();
					}
		        	},
		        	function(errResponse){
		        		itemss.errResponse = "Currencies not Found ";
		        		
		            });
				}
			   	$scope.errResponse = $scope.serverresponse;
			   	$scope.item[index] = $scope.item;
		    	};
});

function tempAlert(msg) {
	var el = document.createElement("div");
	el
			.setAttribute(
					"style",
					"width:300px;	height: 100px;position:absolute;top:50%;left:35%;border-radius: 20px;border-style: solid;background-color:#5bc0de;text-align:center;color:white;margin-top: 50px");
	el.setAttribute("class", "center");
	el.setAttribute("msg", "style", "margin-top:50px;");
	el.innerHTML = msg;
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 2000);
	document.body.appendChild(el);
}