function validatemargin(margin){
	var validatemsg = "";
	
	if(margin < 0 && margin > -1 && checkDecimalsCounts(margin)){
		 validatemsg = "";
	}else{
		validatemsg = "Margin rate should be 0 to -1 and 4 decimals allow"; 
		return validatemsg;
	}
	return validatemsg;
	
}

function validateHistoricalRates(fromDate,toDate,currency){
	var validatemsg = "";
	var fromDateReg = "";
	var toDateReg = "";
	var thisYear = new Date().getFullYear();
	if(fromDate=="" || fromDate==null)
	{
		validatemsg = "From Date Cannot be Empty";
		return validatemsg;
	}else if(toDate=="" || toDate==null)
	{
		validatemsg = "To Date Cannot be Empty";
		return validatemsg;
	}else if(currency=="" || currency==null)
	{
		validatemsg = "Please Select Currency";
		return validatemsg;
	}
	var fromDateReg = fromDate.match(/(\d{4})-(\d{2})-(\d{2})/);
	var	toDateReg = toDate.match(/(\d{4})-(\d{2})-(\d{2})/);
	
	//Validate FromDate
	
	if( fromDateReg === null || typeof fromDateReg !== 'object'){
		validatemsg = "Enter Valid date, Expected date format yyyy-mm-dd";
		return validatemsg;
	}		
	else if (typeof fromDateReg !== 'object' && fromDateReg !== null && fromDateReg.size!==3)
	{
		validatemsg = "Enter Valid date, Expected date format yyyy-mm-dd";
		return validatemsg;
	}
	else if( (fromDateReg[1].length < 4) || fromDateReg[1] > thisYear){
		validatemsg = "Enter Valid Year";
		return validatemsg;
	} 
	else if( (fromDateReg[2].length < 2) || fromDateReg[2] < 1 || fromDateReg[2] > 12)
	{
		validatemsg = "Enter Valid Month";
		return validatemsg;
	}else if( (fromDateReg[3].length < 2) || fromDateReg[3] < 1 || fromDateReg[3] > 31)
	{
		validatemsg = "Enter Valid Day";
		return validatemsg;
	}else if(new Date(fromDate) > new Date() )
	{
		validatemsg = "From Date Cannot be Greater than Current Date";
		return validatemsg;
	}

	//Validate ToDate
	if( toDateReg === null || typeof toDateReg !== 'object'){
		validatemsg = "Enter Valid date, Expected date format yyyy-mm-dd";
		return validatemsg;
	}		
	else if (typeof toDateReg !== 'object' && toDateReg !== null && toDateReg.size!==3)
	{
		validatemsg = "Enter Valid date, Expected date format yyyy-mm-dd";
		return validatemsg;
	}
	else if( (toDateReg[1].length < 4) || toDateReg[1] > thisYear){
		validatemsg = "Enter Valid Year";
		return validatemsg;
	} 
	else if( (toDateReg[2].length < 2) || toDateReg[2] < 1 || toDateReg[2] > 12)
	{
		validatemsg = "Enter Valid Month";
		return validatemsg;
	}else if( (toDateReg[3].length < 2) || toDateReg[3] < 1 || toDateReg[3] > 31)
	{  
		validatemsg = "Enter Valid Day";
		return validatemsg;
	}else if(new Date(toDate) > new Date() )
	{
		validatemsg = "To Date Cannot be Greater than Current Date";
		return validatemsg;
	}else if( (new Date(fromDate) > new Date(toDate)))
	{
		validatemsg = "From Date Cannot be Greater than ToDate";
		return validatemsg;
	}else if(currency.length > 4)
	{
		validatemsg = "Currency cannot be greater than 4 characters";
		return validatemsg;
	}
	return validatemsg;
}

function validateexportpdf(fromDate,toDate){
	var validatemsg = "";
	var fromDateReg = "";
	var toDateReg = "";
	var thisYear = new Date().getFullYear();
	if(fromDate=="" || fromDate==null)
	{
		validatemsg = "From Date Cannot be Empty";
		return validatemsg;
	}else if(toDate=="" || toDate==null)
	{
		validatemsg = "To Date Cannot be Empty";
		return validatemsg;
	}
	var fromDateReg = fromDate.match(/(\d{4})-(\d{2})-(\d{2})/);
	var	toDateReg = toDate.match(/(\d{4})-(\d{2})-(\d{2})/);
	
	//Validate FromDate
	
	if( fromDateReg === null || typeof fromDateReg !== 'object'){
		validatemsg = "Enter Valid date, Expected date format yyyy-mm-dd";
		return validatemsg;
	}		
	else if (typeof fromDateReg !== 'object' && fromDateReg !== null && fromDateReg.size!==3)
	{
		validatemsg = "Enter Valid date, Expected date format yyyy-mm-dd";
		return validatemsg;
	}
	else if( (fromDateReg[1].length < 4) || fromDateReg[1] > thisYear){
		validatemsg = "Enter Valid Year";
		return validatemsg;
	} 
	else if( (fromDateReg[2].length < 2) || fromDateReg[2] < 1 || fromDateReg[2] > 12)
	{
		validatemsg = "Enter Valid Month";
		return validatemsg;
	}else if( (fromDateReg[3].length < 2) || fromDateReg[3] < 1 || fromDateReg[3] > 31)
	{
		validatemsg = "Enter Valid Day";
		return validatemsg;
	}else if(new Date(fromDate) > new Date() )
	{
		validatemsg = "From Date Cannot be Greater than Current Date";
		return validatemsg;
	}

	//Validate ToDate
	if( toDateReg === null || typeof toDateReg !== 'object'){
		validatemsg = "Enter Valid date, Expected date format yyyy-mm-dd";
		return validatemsg;
	}		
	else if (typeof toDateReg !== 'object' && toDateReg !== null && toDateReg.size!==3)
	{
		validatemsg = "Enter Valid date, Expected date format yyyy-mm-dd";
		return validatemsg;
	}
	else if( (toDateReg[1].length < 4) || toDateReg[1] > thisYear){
		validatemsg = "Enter Valid Year";
		return validatemsg;
	} 
	else if( (toDateReg[2].length < 2) || toDateReg[2] < 1 || toDateReg[2] > 12)
	{
		validatemsg = "Enter Valid Month";
		return validatemsg;
	}else if( (toDateReg[3].length < 2) || toDateReg[3] < 1 || toDateReg[3] > 31)
	{  
		validatemsg = "Enter Valid Day";
		return validatemsg;
	}else if(new Date(toDate) > new Date() )
	{
		validatemsg = "To Date Cannot be Greater than Current Date";
		return validatemsg;
	}else if( (new Date(fromDate) > new Date(toDate)))
	{
		validatemsg = "From Date Cannot be Greater than ToDate";
		return validatemsg;
	}
	return validatemsg;
}

function validatecurrencyRate(fromcurrency1,tocurrency1,range1){
	var validatemsg = "";
	if(fromcurrency1=="" || fromcurrency1==null)
	{
		validatemsg = "Select From Currency";
		return validatemsg;
	}else if(fromcurrency1.length > 4)
	{
		validatemsg = "From Currency cannot be greater than 4 characters";
		return validatemsg;
	}else if(tocurrency1=="" || tocurrency1==null)
	{
		validatemsg = "Select To Currency";
		return validatemsg;
	}else if(tocurrency1.length > 4)
	{
		validatemsg = "To Currency cannot be greater than 4 characters";
		return validatemsg;
	}else if(disallowNumericAndSpecialChar(fromcurrency1) || disallowNumericAndSpecialChar(tocurrency1))
	{
		validatemsg = "Numeric and special character NOT allow";
		return validatemsg;
	}else if(range1=="" || range1==null)
	{
		validatemsg = "Range Cannot be Empty";
		return validatemsg;
	}
	return validatemsg;
}
function validatepartner(partnername,partnercode,operatorname,partnercurrency1,partnercountry1){
	var nochangesmade = "";
	if(partnercode == undefined || partnercode == ""){
		nochangesmade = "Enter Partner Code";
		return nochangesmade;
	}else if( partnername == undefined || partnername == ""){
		nochangesmade = "Enter Partner Name";
		return nochangesmade;
	}else if(operatorname == undefined || operatorname == ""){
		nochangesmade = "Enter Operator Name";
		return nochangesmade;
	}else if(partnercountry1 == undefined){
		nochangesmade = "Select Partner Country";
		return nochangesmade;
	}else if(partnercurrency1 == undefined){
		nochangesmade = "Add atleast one currency";
		return nochangesmade;
	}else if(disallowNumericAndSpecialChar(operatorname))
	{
		nochangesmade = "Numeric and special character NOT allow";
		return nochangesmade;
	}else{
		nochangesmade = "";
	}
	return nochangesmade;
}

function validatecurrency(currencycode_add,currencydescription_add){
	var nochangesmade = "";
	if(currencycode_add == undefined || currencycode_add == ""){
		nochangesmade = "Enter Currency Code";
		return nochangesmade;
	}else if(disallowNumericAndSpecialCharCode(currencycode_add))
	{
		nochangesmade = "Numeric,Space and special character NOT allow in Currency Code";
		return nochangesmade;
	}else if(disallowNumericAndSpecialChar(currencydescription_add))
	{
		nochangesmade = "Numeric and special character NOT allow";
		return nochangesmade;
	}else if(currencycode_add.length > 4)
	{
		nochangesmade = "Currency cannot be greater than 4 characters";
		return nochangesmade;
	}else if(currencydescription_add == undefined || currencydescription_add == ""){
		nochangesmade = "Enter Currency Description";
		return nochangesmade;
	}else if(currencydescription_add.length > 100)
	{
		nochangesmade = "Description cannot be greater than 100 characters";
		return nochangesmade;
	}else {
		nochangesmade = "";
	}
	return nochangesmade;
}

function validateupdatecurrency(currencysymbol,currencysymbol2,currencydescription,currencydescription2){
	var nochangesmade = "";
	if(currencysymbol == undefined || currencysymbol == ""){
		nochangesmade = "Enter Currency Code";
		return nochangesmade;
	}else if((currencysymbol==currencysymbol2)&& (currencydescription==currencydescription2)){
		nochangesmade = "No changes found";
		return nochangesmade;
	}
	else if(disallowNumericAndSpecialCharCode(currencysymbol))
	{
		nochangesmade = "Numeric,Space and special character NOT allow in Currency Code";
		return nochangesmade;
	}else if(currencysymbol.length > 4)
	{
		nochangesmade = "Currency cannot be greater than 4 characters";
		return nochangesmade;
	}
	else if(currencydescription.length > 100)
	{
		nochangesmade = "Description cannot be greater than 100 characters";
		return nochangesmade;
	}else{
		nochangesmade = "";
	}
	return nochangesmade;
}
function validateDublicateCurrency(items,currencyCode){
	var isdublicate=false;
	for(var i=0;i<items.length;i++){
		var currency=items[i];
		if(currencyCode == currency.currencysymbol){
			isdublicate=true;
			break;
			
		}
	}
	return isdublicate;
}
function validateupdatepartner(partnercode,partnercode1,partnername,partnername1,operatorname,operatorname1,items){
	var nochangesmade = "";
	if(partnername == ""){
		nochangesmade = "Partner Name Could Not Be Blank";
		return nochangesmade;
	}else if(partnercode==partnercode1 && partnername==partnername1 && operatorname==operatorname1){
		nochangesmade = "No Changes Found";
		return nochangesmade;
	}else if(operatorname == ""){
		nochangesmade = "Operator Name Could Not Be Blank";
		return nochangesmade;
	}else if(disallowNumericAndSpecialChar(operatorname))
	{
		nochangesmade = "Numeric and special character NOT allow";
		return nochangesmade;
	}else{
		nochangesmade = "";
	}
	return nochangesmade;
}

function validateDublicatePartner(items,partnerCode){
	var isdublicate=false;
	for(var i=0;i<items.length;i++){
		var partner=items[i];
		if(partnerCode == partner.partnercode){
			isdublicate=true;
			break;
			
		}
	}
	return isdublicate;
}
function validatereport(currencycode,currencydescription){
	var nochangesmade = "";
	if( currencycode == undefined || currencydescription == undefined){
		nochangesmade = "Insert Currency Details";
		return nochangesmade;
	}else{
		nochangesmade = "";
	}
	return nochangesmade;
}



function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
   if (charCode > 31 &&(charCode < 46 || charCode > 57)) {
        return false;
    }else if(charCode==47){
    	return false;
    }
    return true;
}
function disallowchar(margin){
	re=/^[a-zA-Z\_]*$/;
	var charflag = true; 
	 if(re.exec(margin)){
		 alert("Character and special character NOT allow");
		 charflag = false;
	 } 
	 return charflag;
}

function disallowNumericAndSpecialChar(checkCharValue){
	re=/^[ a-zA-Z\_]*$/;
	var charflag = false; 
	 if(!re.exec(checkCharValue)){
//		 alert("Character and special character NOT allow");
		 charflag = true;
	 } 
	 return charflag;
}
function disallowNumericAndSpecialCharCode(checkCharValue){
	re=/^[a-zA-Z\_]*$/;
	var charflag = false; 
	 if(!re.exec(checkCharValue)){
//		 alert("Character and special character NOT allow");
		 charflag = true;
	 } 
	 return charflag;
}


function checkDecimalsCounts(value){
	var countDecimals = decimalPlaces(value);
	if (countDecimals <= 4){
		return true;
	}else{
		return false;
	}
	
}

function decimalPlaces(num) {
	  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
	  if (!match) { return 0; }
	  return Math.max(
	       0,
	       // Number of digits right of decimal point.
	       (match[1] ? match[1].length : 0)
	       // Adjust for scientific notation.
	       - (match[2] ? +match[2] : 0));
	}

function validateNochangeMade(bid,mid,ask,item){
	var nochangesmade = "";
	if( (bid == "" && mid == "" && ask == "") || (parseFloat(item.BID) == parseFloat(bid) && parseFloat(item.MID) == parseFloat(mid) && parseFloat(item.ASK) == parseFloat(ask))){
		nochangesmade = "No Change Found";
		return nochangesmade;
	}else{
		nochangesmade = "";
	}
	
	
	return nochangesmade;
}



function validateRateValues(bid,mid,ask,item){
	var validatemsg = "";
	var ex_bid = (bid=="")?item.BID:bid;
	var ex_mid = (mid=="")?item.MID:mid;
	var ex_ask = (ask=="")?item.ASK:ask;

	if(parseFloat(bid) > 0 && checkDecimalsCounts(parseFloat(bid))){
		if(parseFloat(bid) > parseFloat(ex_mid) || parseFloat(bid) >parseFloat(ex_ask)) {
			validatemsg = "BID value must be less than MID and ASK";
			return validatemsg;
		}
	} else {
		if((parseFloat(ex_bid) > 0) && !checkDecimalsCounts(parseFloat(bid))){
			validatemsg = "Enter BID value greater than 0 and maximum 4 decimals"; 
			return validatemsg;
		}
		if((parseFloat(ex_bid) == 0.0) || ex_bid == "" || ex_bid == "-" || ex_bid==undefined){
			validatemsg = "Enter BID value greater than 0 and maximum 4 decimals"; 
			return validatemsg;
		}
	}
	
	if(parseFloat(mid) > 0 && checkDecimalsCounts(parseFloat(mid))){
		if(parseFloat(mid) > parseFloat(ex_ask) || parseFloat(mid) < parseFloat(ex_bid)) {
			validatemsg = "MID value must be less than ASK and greater than BID";
			return validatemsg;
		}
	}else{
		if((parseFloat(ex_mid) > 0) && !checkDecimalsCounts(parseFloat(mid))){
			validatemsg = "Enter MID value greater than 0 and maximum 4 decimals"; 
			return validatemsg;
		}
		if((parseFloat(ex_mid) == 0) || ex_mid == "" || ex_mid == "-" || ex_mid==undefined){
			validatemsg = "Enter MID value greater than 0 and maximum 4 decimals"; 
			return validatemsg;
		}
	} 
	
	if(parseFloat(ask) >= 0 && checkDecimalsCounts(parseFloat(ask))){
		if(parseFloat(ask) < parseFloat(ex_bid) || parseFloat(ask) < parseFloat(ex_mid)){
			validatemsg = "ASK value must be greater than BID and MID";
			return validatemsg;
		}
	}else{
		if((parseFloat(ex_ask) > 0) && !checkDecimalsCounts(parseFloat(ask))){
			validatemsg = "Enter ASK value greater than 0 and maximum 4 decimals"; 
			return validatemsg;
		}
		if((parseFloat(ex_ask) == 0) || ex_ask == "" || ex_ask == "-" || ex_ask==undefined){
			validatemsg = "Enter ASK value greater than 0 and maximum 4 decimals"; 
			return validatemsg;
		}
	} 
	return validatemsg;
}
