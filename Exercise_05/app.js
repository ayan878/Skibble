"use strict";

const Breakfast = document.querySelector(".Breakfast");
const btnBreakfast = document.querySelector(".btnBreakfast");


btnBreakfast.addEventListener("click", function () {
Breakfast.classList.remove('Breakfast');
console.log("click");
});

const Lunch = document.querySelector(".Lunch");
const btnLunch = document.querySelector(".btnLunch");

btnLunch.addEventListener("click", function () {
  Lunch.classList.remove("Lunch");
  console.log("click");
});

const Shakes = document.querySelector(".Shakes");
const btnshakes = document.querySelector(".btnShakes");

btnshakes.addEventListener("click", function () {
  Shakes.classList.remove("Shakes");
  console.log("click");
});

const Dinner = document.querySelector(".Dinner");
const btnDinner = document.querySelector(".btnDinner");

btnDinner.addEventListener("click", function () {
  Dinner.classList.remove("Dinner");
  console.log("click");
});

