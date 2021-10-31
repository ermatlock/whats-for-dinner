var letsCookButton = document.querySelector(".lets-cook");
var chooseSide = document.querySelector(".choose-side");
var chooseMain = document.querySelector(".choose-main");
var chooseDessert = document.querySelector(".choose-dessert");
var cookPot = document.querySelector(".cookpot-graphic")


letsCookButton.addEventListener("click",letsCook);

function showCookpot {

}

function hideCookpot {

}

function letsCook() {
  if (chooseSide.checked){
    outputFood.innertext = getRandomFood(sides);
  }else if (chooseMain.checked){
    outputFood.innertext = getRandomFood(mains);
  }else if (chooseDessert.checked){
    outputFood.innertext = getRandomFood(mains);
  }
}


function getRandomFood(array) {
  return Math.floor(Math.random() * array.length);
};
