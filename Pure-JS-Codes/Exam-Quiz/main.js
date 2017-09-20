var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0; // declaring variables
var questions = [
		[ "What is 10 + 4?", "12", "14", "16", "B" ], // multi-dimensional array that holds arrays with the questions, choices, and answers in them
		[ "What is 20 - 9?", "7", "13", "11", "C" ],
		[ "What is 7 x 3?", "21", "24", "25", "A" ],
		[ "What is 8 / 2?", "10", "2", "4", "C" ]
	];

function _(x) { // function that returns the individual ids. The underscore is the name of the function
	return document.getElementById(x);
}

function renderQuestion() {
	test = _("test"); // grabs the "test" div 
	
	if (pos >= questions.length) { // checks if user finished all the questions
		test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0; // resets position of questions
		correct = 0; // resets correct answer counter 
		return false; // stops further execution (stops propegations)
	}

	_("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length; // populates the h2 "test_status" with the number of question and it's position

	// populating test div with questions 
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>" + question + "</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button id='button'>Submit Answer</button>";

	var button = document.getElementById("button"); // grabbing button and adding event listener to it
	button.addEventListener("click", checkAnswer, false);
}

function checkAnswer() {
	choices = document.getElementsByName('choices'); // grabbing the input by name
	for(var i = 0; i < choices.length; i++) { // loops through the array of questions and answers and gets its value 
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}

	if (choice == questions[pos][4]) { // if the users choice equals the last element of the array at the 4th position which is the answer then it increments the correct variable
		correct++;
	}

	pos++; // changes the question the user is in
	renderQuestion(); // run function again (recursion) 
}

window.addEventListener("load", renderQuestion, false); // loads the rederQuestion on window load

