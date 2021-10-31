var choiceSide = document.getElementById("choice-side");
var choiceMain = document.getElementById("choice-main");
var choiceDessert = document.getElementById("choice-dessert");
var letsCookButton = document.querySelector(".lets-cook");
var cookpotGraphic = document.querySelector(".cookpot-graphic");
var youShouldMake = document.querySelector(".you-should-make");
var randomFood = document.querySelector(".random-food");
var clearButton = document.querySelector(".clear-button");

letsCookButton.addEventListener("click", letsCook);
clearButton.addEventListener("click", clearResult);

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

function getRandom(array) {
  return Math.floor(Math.random() * array.length);
};

function letsCook() {
  selectChoice();
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

function selectChoice(choice) {
  if (choiceSide.checked) {
  randomFood.innerText = `${sides[getRandom(sides)]}`;
  } else if (choiceMain.checked) {
  randomFood.innerText = `${mains[getRandom(mains)]}`;
  } else if (choiceDessert.checked) {
  randomFood.innerText = `${desserts[getRandom(desserts)]}`;
  }
};
