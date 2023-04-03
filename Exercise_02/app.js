"use strict";

let output = document.querySelector(".output");
// output=parseInt(output)
let count = 0;
let inc = () => {
  // count+=1
  count = count + 1;
  output.innerHTML = count;
  if (count <= 1) {
    output.style.color = "green";
  }
};

let dec = () => {
  // count+=1
  count = count - 1;
  output.innerHTML = count;
  if ((count) => 0) {
    output.style.color = "red";
  }
};

let reset = () => {
  count = 0;
  output.innerHTML = count;
  output.style.color = "black";
};
