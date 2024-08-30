function enoughAirtime(usage,available){
  var list_usage = usage.split(',');
  var totalcost = 0;
  
  for(var i=0; i<list_usage.length; i++){
    var trimmed_list_usage = list_usage[i].trim();
    
    if(trimmed_list_usage == 'call'){
      totalcost += 1.88;
    }
    else if(trimmed_list_usage == 'data'){
      totalcost += 12;
    }
    else if(trimmed_list_usage == 'sms'){
      totalcost += 0.75;
    }
  }
  var amountleft = available - totalcost;
  if(amountleft > 0){
    return "R"+amountleft.toFixed(2);
  }else{
    return "R0.00";
  }
}
