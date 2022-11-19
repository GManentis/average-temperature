const citiesTemperatureData = require("./data.json");
//console.log(citiesTemperatureData);

let cities = [];


for(let [i, ctd] of Object.keys(citiesTemperatureData).entries()){
	//console.log(citiesTemperatureData[ctd].length);
	cities[i] = {};
	cities[i].name = ctd;
	
	const sumTemp = citiesTemperatureData[ctd].reduce((total, el) => total + el ,0);
	cities[i].avgTemp = (sumTemp / citiesTemperatureData[ctd].length).toFixed(1) * 1;
	
	let closestToAverageIndex = 0;
	let differenceInTempAbs = Math.abs(cities[i].avgTemp - citiesTemperatureData[ctd][0]);
	
	for(let [j,hourTemperature] of citiesTemperatureData[ctd].entries()){
		if(Math.abs( hourTemperature - cities[i].avgTemp ).toFixed(1) * 1 < differenceInTempAbs){
			closestToAverageIndex = j;
			differenceInTempAbs = Math.abs( hourTemperature - cities[i].avgTemp ).toFixed(1) * 1;
		}	 
	}
	
	cities[i].differenceInTempAbsHour = closestToAverageIndex;
	cities[i].diff = differenceInTempAbs;
}


cities.sort((a, b) => a.differenceInTempAbsHour - b.differenceInTempAbsHour );
console.log(cities[0].name);