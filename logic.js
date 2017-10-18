// GLOBAL VARIABLES
//---------------------------------------------

//CAMP VARIABLES
var camping = {
		mountain: 
		{
			name: "mountain",
			value: 0
		},
		tent: 
		{
			name: "tent",
			value: 0
		},
		tree: 
		{
			name: "tree",
			value: 0
		},
		moose: 
		{
			name: "moose",
			value: 0
		}
	};

//scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

//wins and losses
var winCount = 0;
var lossCount = 0;

//FUNCTIONS
//---------------------------------------------
 var getRandom = function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
 }


 var startGame = function () {

 	//reset the current score
 	currentScore = 0;
 	//set a new target score
 	targetScore = getRandom (19,120);
 	//set a different value for each of the crystals (between 1 - 12)
 	camping.moose.value 	= getRandom(1, 12);
 	camping.tree.value 		= getRandom(1, 12);
 	camping.tent.value 		= getRandom(1, 12);
 	camping.mountain.value 	= getRandom(1, 12);

 	//html links
 	$("#target-score").html(targetScore)
 	$("#your-score").html(currentScore)


 	//testing console

 console.log("-------------------------")

 console.log("targetScore " + targetScore)
 console.log("moose " + camping.moose.value)
 console.log("tent " + camping.tent.value)
 console.log("mountain " + camping.mountain.value);
 console.log("tree " + camping.tree.value);

 console.log("-------------------------")

}

 //respond to click values
 var addValues = function(camping) {
 targetScore = targetScore



 	currentScore = currentScore + camping.value;
 	console.log(currentScore)
 	

 	
 	//change HTML to reflect now "currentScore" value
 	$("#your-score").html(currentScore);

 	
 	//run checkWin function
 	checkWin ();


 	
 }

 	
 	// check win function

 	var checkWin = function() {

 		//check if currentScore is larger than the targetScore
 		if (currentScore > targetScore) {
 			alert("Game over!");
 			console.log("Game over")
 			lossCount++
 			//update the html
 			$("#loss-count").html(lossCount);

 			startGame ();
 		}

 		else if (currentScore == targetScore) {
 			alert("Winner Winner!")
 			winCount++
 			//update the html
 			$("#win-count").html(winCount);

 			startGame ();

 		}

 	}





//MAIN PROCESS
//---------------------------------------------
startGame ();//starts the game

if (targetScore == currentScore) {
	alert("winner")
	winCount++
};


$("#mountain").click(function() {
console.log("mountain")
addValues(camping.mountain);

});

$("#tree").click(function() {
	console.log("tree")
	addValues(camping.tree);
});

$("#moose").click(function() {
	console.log("moose")
	addValues(camping.moose);
});

$("#tent").click(function() {
	console.log("tent")
	addValues(camping.tent);
});

















