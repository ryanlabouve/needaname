function needaname(gender) {
	male = randomName(names.male_names);
	female = randomName(names.female_names);
	surname = randomName(names.surname_names);

	if(gender==="male") {
		return male + " " + surname;
	} else if(gender==="female") {
		return female + " " + surname;
	} else {
		//the magic with the math function returns a value toggling
		//between 0 and 1... so it alternately returns male and female
		random_name = Math.round(Math.random() * 1) ? male : female;

		return random_name + " " + surname;
	}


	function randomName(nameArray) {
		//garantees that the number returned is less
		//than the max index of name array
		//, taking indexing into account
		return nameArray[ Math.floor(Math.random() * (nameArray.length - 1)) ];
	}
}