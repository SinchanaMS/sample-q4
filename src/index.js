import "./styles.css";

var inputText = document.querySelector("#input-text");
var redBtn = document.querySelector("#red");
var greenBtn = document.querySelector("#green");
var blueBtn = document.querySelector("#blue");

function changeColorToRed() {
  inputText.style.color = "red";
}

function changeColorToGreen() {
  inputText.style.color = "green";
}

function changeColorToBlue() {
  inputText.style.color = "blue";
}

redBtn.addEventListener("click", changeColorToRed);
greenBtn.addEventListener("click", changeColorToGreen);
blueBtn.addEventListener("click", changeColorToBlue);
