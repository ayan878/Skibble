// Creating element Dynamically 
// Creating div element
let divElement =document.createElement('div');
// divElement.classList.add('container');

// //add some text content to DIV element 
let textNode = document.createTextNode("Skibble");

// // Add content to DIV element
// divElement.appendChild('textNode');
divElement.appendChild(textNode);

// // add  the element  to webpages
// let container =document.querySelector('.container');
// container.appendChild(divElement);
// document.body.appendChild(divElement);

// let divElement = document.createElement('div')
// divElement.classList.add('.form-container');
// form-formContainer.appendChild(divElement)
// let formContainer = document.getElementById("form-container");
// let numInputs = 1;

// function addInput() {
//   let input = document.createElement("input");
//   input.type = "text";
//   input.name = "input-" + numInputs;
//   formContainer.appendChild(input);
//   numInputs++;
// }
