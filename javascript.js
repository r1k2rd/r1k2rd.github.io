	


	var fuelPrice = "";
	var avgFuelConsumption = "";
	var distanceDriven = "";

	var currencyRatio = 1;

	var result = "";


	function getFuelPrice(){

	if(document.getElementById('fuelPriceId').value != ""){
		fuelPrice = document.getElementById('fuelPriceId').value;
		if(fuelPrice.includes(",") == true){
			fuelPrice = fuelPrice.replace(",", ".");
		}
	}

	if(document.getElementById('fuelConsumptionId').value != ""){
		avgFuelConsumption = document.getElementById('fuelConsumptionId').value;
		if(avgFuelConsumption.includes(",") == true){
			avgFuelConsumption = avgFuelConsumption.replace(",", ".");
		}
	}


	if(document.getElementById('distanceDrivenId').value != ""){
		distanceDriven = document.getElementById('distanceDrivenId').value;
		if(distanceDriven.includes(",") == true){
			distanceDriven = distanceDriven.replace(",", ".");
		}
	}



	
	

	if(fuelPrice != "" && isNaN(fuelPrice) || fuelPrice == ""){
		result = "<=Enter fuel price";
		document.getElementById('fuelErrorId').innerHTML = result;
	}
	if(avgFuelConsumption != "" && isNaN(avgFuelConsumption) || avgFuelConsumption == ""){
		result = "<=Enter avg. fuel consumption";
		document.getElementById('consumptionErrorId').innerHTML = result;
	}
	if(distanceDriven != "" && isNaN(distanceDriven) || distanceDriven == ""){
		result = "Enter the distance driven by your vehicle";
		document.getElementById('distanceErrorId').innerHTML = result;
	}
	else{

				result =  "Money spent on fuel = " + Math.round(((Number(fuelPrice) * Number(avgFuelConsumption)
					* (Number(distanceDriven)/100) ))*100)/100 + " EUR";
				document.getElementById('fuelErrorId').innerHTML = "";
				document.getElementById('consumptionErrorId').innerHTML = "";
				document.getElementById('distanceErrorId').innerHTML = "";
			
	
	document.getElementById("fuelresult").innerHTML = result;

	}

}



	//Calories burned form code:

	/*MET numbers source:
	https://onlinelibrary.wiley.com/doi/pdf/10.1002/clc.4960130809 */

	var METcyclingSlow = 4.8;
	var METcyclingAverage = 7.1;
	var METcyclingFast = 9.8;

	var weight = "";
	var speed = "";
	var caloriesPerHour = "";

	var errorMessage = "";

	function getCaloriesBurned(){

	if(document.getElementById('weightValueId').value != ""){
		weight = document.getElementById('weightValueId').value;
	}

	speed = document.getElementById('speedValueId').value;
	if(weight == ""){
		errorMessage = "<=Enter weight here";
		document.getElementById('weightErrorId').innerHTML = errorMessage;
		document.getElementById('caloriesBurnedId').innerHTML = "";
	}

	else if(weight != "" && isNaN(weight)){
		errorMessage = "<=Enter weight here";
		document.getElementById('weightErrorId').innerHTML = errorMessage;
		document.getElementById('caloriesBurnedId').innerHTML = "";
	}else{
		switch(speed){
			case("Slow(~10km/h)"):
			caloriesPerHour = Math.round(Number(weight) * METcyclingSlow);
			break;
			case("Average(~20km/h)"):
			caloriesPerHour = Math.round(Number(weight) * METcyclingAverage);
			break;
			case("Fast(~30km/h)"):
			caloriesPerHour = Math.round(Number(weight) * METcyclingFast);
			break;
		}
		errorMessage = "";
		
		document.getElementById('caloriesBurnedId').innerHTML = "Calories burned = " + caloriesPerHour + "kcal/h";
		document.getElementById('weightErrorId').innerHTML = "";
	}


	

}

/*Change between views */

var aboutview = document.querySelector('#aboutpage');
var fuelview = document.querySelector('#fuelpage');
var caloriesview = document.querySelector('#caloriespage');
var livelongerview = document.querySelector('#livelongerpage');
var gethappyview = document.querySelector('#gethappypage');

var viewlist = [aboutview, fuelview, caloriesview, livelongerview, gethappyview];

function changeView(view){
	for(i = 0; i < viewlist.length; i++){
		if(viewlist[i] == view){
			viewlist[i].style.visibility = 'visible';
		}
		else{
			viewlist[i].style.visibility = 'hidden';
		}
	}
}

