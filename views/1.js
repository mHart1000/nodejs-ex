inputs = document.querySelectorAll("input");
listItems = document.querySelectorAll("li");
input2 = 1;

inputs[0].addEventListener("keyup", i1, false);
inputs[1].addEventListener("keyup", i2, false);


function i1(e) {
	input1 = inputs[0].value;
	x()
	};
function i2(e) {
	if(inputs[1].value > 0 && inputs[1].value < 4) {
		input2 = inputs[1].value;
		x()
	} else if(inputs[1].value !=""){
		alert("Please enter a number from 1-3")
	};
		
};
function x() {
	for(i=0;i<3;i++) {
		listItems[i].classList.remove("show");
		if(i<input2) {
			listItems[i].innerHTML = input1;
			listItems[i].classList.add("show");
		}
	}
};