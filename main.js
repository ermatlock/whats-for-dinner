var choiceSide = document.getElementById("choice-side");
var choiceMain = document.getElementById("choice-main");
var choiceDessert = document.getElementById("choice-dessert");
var cookpotGraphic = document.querySelector(".cookpot-graphic");
var youShouldMake = document.querySelector(".you-should-make");
var randomFood = document.querySelector(".random-food");
var letsCookButton = document.querySelector(".lets-cook-button");
var clearButton = document.querySelector(".clear-button");
var loader = document.querySelector(".loader")

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
  clearResult();
  selectChoice();
  hide(cookpotGraphic);
  show(loader);
  runTimer()
};

function showFood() {
  hide(cookpotGraphic);
  hide(loader);
  show(randomFood);
  show(youShouldMake);
  show(clearButton);
}

function runTimer() {
  setTimeout(function(){showFood()}, 1000);
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

// function cookTimer(){
  // setTimeout(, 3000);
// }
// function showTimer() {
//
// }
