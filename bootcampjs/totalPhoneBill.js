function  totalPhoneBill(billStr){
  var totalcost = 0;
  var lstbillStr = billStr.split(',');
  
  for(var i=0; i<lstbillStr.length; i++){
    var trimmedlstbillStr = lstbillStr[i].trim();
    if(trimmedlstbillStr == 'call'){
      totalcost += 2.75;
    }
    else if(trimmedlstbillStr == 'sms'){
      totalcost += 0.65;
    }
    else{
      return 0;
    }
  }
  return "R"+totalcost.toFixed(2);
}