"use strict";

const Breakfast = document.querySelector(".Breakfast");
const btnBreakfast = document.querySelector(".btnBreakfast");
const openBreakfast= function(){
  
Breakfast.classList.remove("Breakfast");
Lunch.classList.add('Lunch');
Dinner.classList.add('Dinner');
Shakes.classList.add('Shakes');
console.log("click");
}
btnBreakfast.addEventListener("click", openBreakfast);


const Lunch = document.querySelector(".Lunch");
const btnLunch = document.querySelector(".btnLunch");
const openLunch=function(){
Lunch.classList.remove("Lunch");
// }
// else{
// Breakfast.classList.add("Breakfast");
// Dinner.classList.add("Dinner");
// Shakes.classList.add("Shakes");
// };


console.log("click");
}
btnLunch.addEventListener("click", openLunch);


const Shakes = document.querySelector(".Shakes");
const btnshakes = document.querySelector(".btnShakes");
const openShakes =function(){
 Shakes.classList.remove("Shakes");
 Lunch.classList.add("Lunch");
 Breakfast.classList.add("Breakfast");
 Dinner.classList.add("Dinner");
 console.log("click");
}

btnshakes.addEventListener("click", openShakes); 

const Dinner = document.querySelector(".Dinner");
const btnDinner = document.querySelector(".btnDinner");
const openDinner =function(){
Dinner.classList.remove('Dinner');
// Dinner.classList.add('Breakfast');
// Dinner.classList.add('Lunch');
// Dinner.classList.add('Shakes');
console.log("click");
}
btnDinner.addEventListener("click", openDinner); 

const All = document.querySelector(".All");
const btnAll = document.querySelector(".btnAll");
const openAll =function(){
  All.classList.remove("Dinner");
  All.classList.remove("Breakfast");
  All.classList.remove("Lunch");
  All.classList.remove("Shakes");
  console.log("click");
}
btnAll.addEventListener("click", openAll);
