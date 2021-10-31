var choiceSide = document.getElementById("#choice-side");
var choiceMain = document.getElementById("#choice-main");
var choiceDessert = document.getElementById("#choice-dessert");
var letsCookButton = document.querySelector(".lets-cook");
var cookpotGraphic = document.querySelector(".cookpot-graphic");
// var radioButtonSelect = document.querySelectorAll(".radio");
var youShouldMake = document.querySelector(".you-should-make");
var randomFood = document.querySelector(".random-food");
var clearButton = document.querySelector(".clear-button");

letsCookButton.addEventListener("click", letsCook);
clearButton.addEventListener("click", clearResult);
// radioButtonSelect.addEventListener("change", selectChoice);

function show(element) {
  element.classList.remove("hidden");
};
function hide(element) {
  element.classList.add("hidden");
};

function letsCook() {
  selectChoice();
  // randomFood.innerText = "I Replaced You"
  hide(cookpotGraphic);
  show(randomFood);
  show(youShouldMake);
  show(clearButton);
};

function clearResult() {
  show(cookpotGraphic);
  hide(randomFood);
  hide(youShouldMake);
  hide(clearButton);
};

function getRandom(array) {
  return Math.floor(Math.random() * array.length);
};

function getRandomFood(array) {
  var randomFood = getRandom(array);

}



function selectChoice(choice) {
  if (choiceSide.checked) {
  randomFood.innerText = getRandomFood(sides);
  } else if (choiceMain.checked) {
  randomFood.innerText = getRandomFood(mains);
  } else if (choiceDessert.checked) {
  randomFood.innerText = getRandomFood(desserts);
  }
};
