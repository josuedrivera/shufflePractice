console.log("connected");

var marvChars = [
	{
		name: "Dr. Strange",
		image: "img/doctorStrange.jpg"
	},
	{
		name: "The Hulk",
		image: "img/hulk.jpg"
	},
	{
		name: "Wolverine",
		image: "img/wolverine.jpg"
	},
	{
		name: "Spider-Man",
		image: "img/spiderMan.jpg"
	},
	{
		name: "Gambit",
		image: "img/gambit.jpg"
	},
	{
		name: "Thor",
		image: "img/thor.jpg"
	},
	{
		name: "Iron Man",
		image: "img/ironMan.jpeg"
	},
	{
		name: "Black Widow",
		image: "img/blackWidow.jpg"
	}
];


var characterDiv = document.getElementById("character")


// this function will shuffle through the images
function chooseChar() {
	var randomNum = Math.floor(Math.random() * (marvChars.length - 1 + 1));
	console.log(randomNum);
	characterDiv.innerHTML = 
		"<h1>" + marvChars[randomNum].name + `</h1>
		<img src='` + marvChars[randomNum].image + 
		"'alt='" + marvChars[randomNum].name + "'>";
}




// look up to how keep images from repeating until all images have been already displayed
















