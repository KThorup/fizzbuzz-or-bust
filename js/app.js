var idx = 0;
var counter = [];
var numbers = ['0', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

var numbers_teens = ['0', 'eleven', 'tweleve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var numbers_tens = ['0', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one-hundred'];


buildArray();

$(document).ready(function(){
  
  $("#btn").click(function(){
    
    $("ol").append(" <li>"+counter[idx]+"</li>");
	idx++;
  });

  $("#btnAll").click(function(){
	idx=0;
	for (var i=0; i<counter.length; i++)
	{    
    		$("ol").append(" <li>"+counter[i]+"</li>");
	}
  });

  $("#btnClear").click(function(){
	console.log("btnClear");
	idx = 0;
	$("ol")[0].innerHTML = "";
	
  });

});

function buildArray()
{
	var isDivisibleBy3 = false;
	var isDivisibleBy5 = false;
	var j = 0;
	var k = 0;

	for (var i=1; i<=100; i++)
	{
		isDivisibleBy3 = false;
		isDivisibleBy5 = false;
		j++;
		if (j === 10)
		{
			j = 0;	
			k++;
		}

		if ((i % 3) === 0)
              isDivisibleBy3 = true;

		if ((i % 5) === 0)
              isDivisibleBy5 = true;

		if (isDivisibleBy3 && isDivisibleBy5)
		{
			counter.push("fizbuz");
		}
		else if (isDivisibleBy5)
		{
			counter.push("buz");
		}
		else if (isDivisibleBy3)
		{
			counter.push("fiz");
		}	
		else 
		{
			var numberDesc = getNumberDescription(i, j, k);
			counter.push(numberDesc);
		}
	}
}

function getNumberDescription(i, j, k)
{
	if (i < 10)
		return numbers[i];
	if ((i % 10) === 0)
           return numbers_tens[k];
	if (i < 20)
		return numbers_teens[j];
	
	return numbers_tens[k] +  "-" + numbers[j];
}


