

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

"use strict";

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
// get parent element
const menuItem = document.querySelector(".menuItem");
const btnBox = document.querySelector(".btn-box");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<div class="menuItem">
        <div> <img src=${item.img} alt=${item.title} class="photo" /></div>
          <div class="desc">
              <h3>${item.title}
              <span class="price">$${item.price}</span></h3>
               <p class="item-text">
              ${item.desc}
            </p>  
          </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  menuItem.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnBox.innerHTML = categoryBtns;
  const filterBtns = btnBox.querySelectorAll(".btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
