
////////////EVENT LISTENERS HERE:///////////////////////////////////

// var outputEl = document.getElementById("submitButton").addEventListener("click", function (event){
// 	(growtree);
// console.log ("event", event);
// });



///////ENTER BUTTON EVENT LISTENER//////////
// function inputKeyUp(event) {

//     if(event.keyCode === 13) {
//     	(growtree);
//     }
//     console.log ("ENTER key used!")
//   };

/////FUNCTION THAT CALCULATES VALUES FOR CHARACTERS AND SPACES//////////////


function tree (clickEvent){

	var enteredUserHeight = document.getElementById('inputHeight').value;
	var inputChar = document.getElementById('inputChar').value;



// this needs to correspond to the DOM element in the input box
     // var enteredUserHeight = 5;
	   for (var i = 0; i< enteredUserHeight; i++) {

		 var spaces= enteredUserHeight-i;
		 var newSpaces= " ".repeat(spaces);
	   var char= ((2*i)+1);
// this needs to correspond to the DOM element in the input box
		 var newChar= "&".repeat(char);
		 // var newChar= inputChar.repeat(char);

		 var makeTree= newSpaces + newChar;
		 console.log (makeTree);
	}
};
tree();



















