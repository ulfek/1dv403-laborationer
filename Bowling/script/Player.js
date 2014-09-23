
function Player(name, handedness, age,test) {
	var score = 0;

	this.getName = function () { return name; };
	this.setName = function (_name) { name = _name; };

	this.getHandedness = function () { return handedness; };
	this.setHandedness = function (_handedness) { handedness = _handedness; };

	this.getAge = function () { return age; };
	this.setAge = function (_age) { age = _age; };

	this.getScore = function() { return score }

	this.addPoint = function (point) {
		if(!isNaN(point) && (point > 0)) {
			score += point;
		}
	}

	this.setName(name);
	this.setHandedness(handedness);
	this.setAge(age);

	// Alternativ till getters använd Object.defineProperty
	Object.defineProperty(this, "name", {
		get: function() { return name; },
		set: function(newName) { name = newName }
	});

	return this;
};