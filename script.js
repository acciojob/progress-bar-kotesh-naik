//your JS code here. If required.

const circles = document.querySelectorAll(".circle");
const lines =document.querySelectorAll(".line");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
let currentActive = 1;
function handleNextButton(){
	currentActive++;
	if(currentActive > circles.length){
		currentActive =circles.length;
	}
	updateUI();
}
function handlePrevButton(){
	currentActive--;
	if(currentActive < 1){
		currentActive = 1;
	}
	updateUI();
}
function updateUI(){
	circles.forEach((circle,idx) => {
		idx < currentActive ? 
			circle.classList.add("active"):
			circle.classList.remove("active");
	})
	lines.forEach((line,idx)=>{
		idx < currentActive ?
			line.classList.add("active"):
			line.classList.remove("active");
	})
	prevButton.disabled = currentActive === 1;
	nextButton.disbled = currentActive === circle.length;
}
