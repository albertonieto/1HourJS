var numberHolder = 0;

var welcomeMsg = 'Welcome to this test.';
var successMsg = 'Well done!';
var textChangeMsg = 'The text has been changed.';

//Welcome message
alert(welcomeMsg);

//Clicking buttons
function clickButton(){
	alert(successMsg);
}

//Changing text
function changeText(){
	document.getElementById('textChange').innerHTML = textChangeMsg;
}

//Working with user inputs
function manageUserInput(){
	var userTextInput = document.getElementById('userText').value;
	alert(userTextInput);
}