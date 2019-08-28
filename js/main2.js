console.log("yo");

const firstName = "Nate";
const lastName = "Vogel";

function fullName() {
	const myName = `${firstName} ${lastName}`;
	console.log(`myname is ${myName}`);
}

fullName();

const crayonColors = ["red", "blue"];
const fullBox = 4;

function addColor(newColor) {
	crayonColors.push(newColor);
	return crayonColors.length;
}

let crayonBoxNumber = addColor("snozberry");
if (crayonBoxNumber < fullBox) {
	console.log("pick another color");
} else {
	console.log("full box");
}

console.log("crayonColorLength", crayonColors.length);

addColor("pink");

console.log("crayonColorLength", crayonColors.length);

let debbieArray = [
	(zebras = {
		color: "white",
		icing: "white",
		accent: "black",
		taste: 1
	}),
	(rolls = {
		color: "brown",
		icing: "orange",
		accent: "pink",
		taste: 2
	}),
	(oatCakes = {
		color: "brown",
		icing: "white",
		accent: null,
		taste: 3
	})
];

console.log(debbieArray);
