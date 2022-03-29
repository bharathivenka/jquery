var details={
      "LAPTOPS": 18,
      "HEADPHONES": 19,
      "SMART WATCHES": 39,
      "CAMERAS":12,
      "TABLETS":13,
      "SMART TVs":14,
      "ACs":32,
      "WASHING MACHINES":36,
      "DISHWASHERS":40,
      "MICROWAVE":15
  };
$(document).ready(function(){
  
  $("#slider").slider({max:80,range:true,values:[1,80],
  	change:function(event,ui){
  		getDetails(ui.values[0],ui.values[1]);
  	
  }});
  var current = $("#slider").slider("option","values");
  getDetails(current[0],current[1]);
  });
function getDetails(minimum,maxmimum)
{
	$("#range").text(" Age "+minimum+" -Age "+maxmimum);
	var result="<table><tr><th>PRODUCT NAME</th><th>AGE</th></tr>";
	for(var item in details)
	{
		if(details[item]>=minimum&&details[item]<=maxmimum)
		{
			result +="<tr><td>"+item+"</td><td>" +details[item]+"</td></tr>";
		}
	}
	result +="</table>";
	$("#output").html(result);
	}
