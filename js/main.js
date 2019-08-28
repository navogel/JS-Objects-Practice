console.log("hello");

const hamster = {
	age: 40,
	legs: 3,
	fluffy: true,
	name: "Hammond",
	children: ["Captain Cheeks", "Peter Poo", "Sally"],
	nickname: "Ham Sir",
	chewing: function chew(what) {
		console.log("chewing", what);
	}
};

const sister = {
	name: "mary",
	age: 30,
	height: 7,
	hair: "brown"
};

const brother = {
	name: "moody",
	age: 18,
	height: 6,
	hair: "red"
};

const dad = {
	name: "stu",
	age: 50,
	height: 7,
	hair: "red"
};

const mom = {
	name: "lin",
	age: 48,
	height: 6,
	hair: "blond"
};

const family = [sister, brother, dad, mom];

console.log("hamster object", family);

for (let i = 0; i < hamster.children.length; i++) {
	console.log(`yo hammy ${i + 1}'s name is ${hamster.children[i]}`);
}

hamster.children.forEach((item, index) => {
	console.log(`yo hammy ${index + 1}'s name is ${item}`);
});

const empireStateBuilding = {
	stories: 103,
	height: 1453,
	address: "350 Fifth Avenue, Manhattan, New York 10118",
	squareFeet: 2768591,
	constructionDate: 1931,
	cost: 40948900,
	owner: "Empire State Realty Trust",
	eastWestLength: 424,
	northSouthLength: 187,
	architect: "Shreve, Lamb & Harmon"
};

console.log("stories", empireStateBuilding.stories);
console.log("height", empireStateBuilding.height);
console.log("sq ft", empireStateBuilding.squareFeet);
console.log("east west length", empireStateBuilding.eastWestLength);
console.log("north south length", empireStateBuilding.northSouthLength);

console.log("cost", empireStateBuilding["cost"]);

const nashvilleSoftwareSchool = {
	founded: 2012,
	director: "John Wark",
	instructors: {
		fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
		partTime: ["Zoe", "Nathan"]
	},
	address: "500 Interstate Blvd. S"
};

console.log(
	nashvilleSoftwareSchool.instructors.partTime,
	nashvilleSoftwareSchool.instructors.fullTime
);

console.log(
	nashvilleSoftwareSchool.instructors.partTime[0],
	nashvilleSoftwareSchool.instructors.fullTime[4]
);

const beatles = {
	albums: [
		"Abbey Road",
		"Sgt Peppers Lonely Heart's Club Band",
		"Revolver",
		"Magical Mystery Tour",
		"Something New"
	],
	history: {
		formed: 1960,
		disbanded: 1970
	},
	members: [
		{
			name: "George Harrison",
			birth: 1943,
			death: 2001
		},
		{
			name: "Paul McCartney",
			birth: 1942,
			death: null
		},
		{
			name: "John Lennon",
			birth: 1940,
			death: 1980
		},
		{
			name: "Ringo Starr",
			birth: 1940,
			death: null
		}
	]
};

console.log(
	`${beatles.members[1].name} was in the Beatles from ${
		beatles.history.formed
	} to ${beatles.history.disbanded}. He was born in ${
		beatles.members[1].birth
	}. He contributed heavily to the ${beatles.albums[3]} Album.`
);
