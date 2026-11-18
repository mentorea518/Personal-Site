const pageTitle = document.querySelector("#title");
const dmButton = document.querySelector("#dmbutton");
const navText = document.querySelectorAll("#navlink");
const textContent = document.querySelector("article");

var nextBgColor = "black";
var nextTitleColor = "darkorchid";
var nextNavTextColor = "white";
var nextButtonColor = "white";
var nextButtonTextColor = "black";
var nextBorderColor = "0.1rem solid white";
var nextBodyTextColor = "white";

dmButton.addEventListener("click", function() {
  toggleBgColor();
  toggleTitleColor();
  toggleNavTextColor();
  toggleButtonColor();
  toggleButtonTextColor();
  toggleBorderColor();
  toggleBodyTextColor();
});

function toggleBgColor() {
  document.body.style.backgroundColor = nextBgColor;
  if (nextBgColor == "black") {
    nextBgColor = "white";
  }
  else {
    nextBgColor = "black";
  }
}

function toggleTitleColor() {
  pageTitle.style.color = nextTitleColor;
  if (nextTitleColor == "darkorchid") {
    nextTitleColor = "purple";
  }
  else {
    nextTitleColor = "darkorchid";
  }
}

function toggleNavTextColor() {
  for (i = 0; i < navText.length; i++) {
    navText[i].style.color = nextNavTextColor;
  }
  if (nextNavTextColor == "white") {
    nextNavTextColor = "black";
  }
  else {
    nextNavTextColor = "white";
  }
}

function toggleButtonColor() {
  dmButton.style.backgroundColor = nextButtonColor;
  if (nextButtonColor == "white") {
    nextButtonColor = "black";
  }
  else {
    nextButtonColor = "white";
  }
}

function toggleButtonTextColor() {
  dmButton.style.color = nextButtonTextColor;
  if (nextButtonTextColor == "black") {
    nextButtonTextColor = "white";
  }
  else {
    nextButtonTextColor = "black";
  }
}

function toggleBorderColor() {
  textContent.style.border = nextBorderColor;
  if (nextBorderColor == "0.1rem solid white") {
    nextBorderColor = "0.1rem solid black";
  }
  else {
    nextBorderColor = "0.1rem solid white";
  }
}

function toggleBodyTextColor() {
  textContent.style.color = nextBodyTextColor;
  if (nextBodyTextColor == "white") {
    nextBodyTextColor = "black";
  }
  else {
    nextBodyTextColor = "white";
  }
}
