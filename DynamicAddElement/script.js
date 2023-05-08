//Creating element Dynamically 
//  Creating div element
let divElement =document.createElement('div');
divElement.classList.add('.Passeanger');

//add some text content to DIV element 
let textNode = document.createTextNode("Skibble");

// Add content to DIV element
divElement.appendChild('textNode');

// add  the element  to webpages
let container =document.querySelector('.container');
container.appendChild(divElement);