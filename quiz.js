// PINE TREE QUIZ

// 1.) Create variables to store each input element:
var inputHeight = document.getElementById("inputHeight");
var inputSymbol = document.getElementById("inputChar");

//2.) Create event listeners for enter key on input elements:
inputHeight.addEventListener('keypress', enterKeyPress);
inputSymbol.addEventListener('keypress', enterKeyPress);

// console.log(enterKeyPress);(NOT WORKING)

//3.) Create variable to store button element:
var grow = document.getElementById("grow");

//4.) Create "click" event listener for button:
grow.addEventListener('click', inputValidation);

///////////////////////////////////////////////////////////////////
//5.) Define function for enter key press:
function enterKeyPress (event) {

//6.) Determine if enter key is pressed//(WORKS)
  if ( event.keyCode === 13 ) {
    // console.log ("Enter key pressed");
    //envoke tree to capture input data
    inputValidation();
  };
  //end of first condition for enter key
};
///////////////////////////////////////////////////////////////////
//6.) Define function that tests if input fields are empty: (WORKS)

function inputValidation() {
  // console.log("inputValidation running");
  //determine if input values are empty
  if ( inputHeight.value === "" | inputSymbol.value === "" ) {
    alert('Error: Both input fields need a value');
  } else {
    buildtree()
  }
};

// 7. Create a function that It accepts a single object as an argument.
// The object should have two key/value pairs. stores the values of inputHeight
// and inputSymbol


function buildtree (){
  var treeObject= {}
  treeObject.height = inputHeight.value;
  treeObject.symbol = inputChar.value;
  // console.log(treeObject.height, treeObject.symbol);

  tree(treeObject)

};




/////////////////////////////////////////////////////////////////
// 8.) Define function that creates the tree in the console:

function tree (treeObject){
console.log("tree running", treeObject);

	   for (var i = 0; i< treeObject.height; i++) {
// console.log("treeObject.height: ", treeObject.height);

		 var spaces= treeObject.height-i;
		 var newSpaces= " ".repeat(spaces);
	   var char= ((2*i)+1);

		 var newChar= treeObject.symbol.repeat(char);
		 var makeTree= newSpaces + newChar;
		 console.log (makeTree);
	}
};




// THIS IS MY ORIGINAL FUNCTIONING TREE (HARDCODED HEIGHT AND SYMBOL)////
// function tree (){

//     var enteredUserHeight = 5;
// 	   for (var i = 0; i< enteredUserHeight; i++) {

// 		 var spaces= enteredUserHeight-i;
// 		 var newSpaces= " ".repeat(spaces);
// 	   var char= ((2*i)+1);

// 		 var newChar= "*".repeat(char);


// 		 var makeTree= newSpaces + newChar;
// 		 console.log (makeTree);
// 	}
// };
// tree();

















