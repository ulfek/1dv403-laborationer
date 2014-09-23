"use strict";

var makePerson = function(persArr){


	// Din kod här...
	var index;
	var retObj = {
		minAge: Number.MAX_VALUE,
		maxAge: Number.MIN_VALUE,
		averageAge: 0,
		names: ""
	};

	console.log("persArr length: " + persArr.length);
	console.log("persArr typeof: " + typeof(persArr));
	for(index = 0; index < persArr.length; index+=1) {
		console.log(persArr[index].name);
		if(persArr[index].age <  retObj.minAge)
			retObj.minAge = persArr[index].age;
		if(persArr[index].age > retObj.maxAge)
			retObj.maxAge = persArr[index].age;
		retObj.averageAge += persArr[index].age;
	}
	retObj.averageAge = Math.round(retObj.averageAge/persArr.length);

	var pers = persArr.sort(function(a,b) {
		var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
		return nameA.localeCompare(nameB);
	});
	for(index = 0; index < pers.length; index+=1) {
		retObj.names += pers[index].name;
		if(index < pers.length - 1)
			retObj.names += ", ";
	}
	return retObj;

}

