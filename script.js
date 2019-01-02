//Simple Calculator

var inputLabel = document.getElementById("inputLabel");

function buttonPush(obj){

	var press = obj.innerHTML;

	if (press == "="){
		inputLabel.innerHTML = eval(inputLabel.innerHTML);
	} else if (press == "C") {
		inputLabel.innerHTML = "0";
	} else {
		if (inputLabel.innerHTML == "0"){
			inputLabel.innerHTML = press;
		}
		else {
			inputLabel.innerHTML += press;
		}
	}
} 