
// let Cal = (x) => {
//   let nm1 = document.querySelector(".num1").value;
//   let nm2 = document.querySelector(".num2").value;
//   let res = document.querySelector(".res");
//   let operator = x.value;

//   nm1 = Number(nm1);
//   nm2 = Number(nm2);

//   switch (operator) {
//     case "+":
//       console.log('+');
      
//       res.innerHTML = nm1 + nm2;
//       break;

//     case "-":
//       res.innerHTML = nm1 - nm2;
//       break;

//     case "*":
//       res.innerHTML = nm1 * nm2;
//       break;

//     case "/":
//       res.innerHTML = nm1 / nm2;
//       break;
//   }
// };
// plus operation
 addNum =document.querySelector('.addNum')
 const plusOperation = function () {
   num1 = parseInt(document.calc.txt1.value);
   num2 = parseInt(document.calc.txt2.value);
   num3 = num1 + num2;
   document.calc.txt3.value = num3;
   console.log(num3);
 };
 addNum.addEventListener("click", plusOperation);

 //sub Operation

 subNum = document.querySelector(".subNum");
 const subOperation = function () {
   num1 = parseInt(document.calc.txt1.value);
   num2 = parseInt(document.calc.txt2.value);
   num3 = num1 - num2;
   document.calc.txt3.value = num3;
   console.log(num3);
 };
 subNum.addEventListener("click", subOperation);

 // Multiply operation

 mulNum = document.querySelector(".mulNum");
 const mulOperation = function () {
   num1 = parseInt(document.calc.txt1.value);
   num2 = parseInt(document.calc.txt2.value);
   num3 = num1 * num2;
   document.calc.txt3.value = num3;
   console.log(num3);
 };
 mulNum.addEventListener("click", mulOperation);

 //Divide operation

 divNum = document.querySelector(".divNum");
 const divOperation = function () {
   num1 = parseInt(document.calc.txt1.value);
   num2 = parseInt(document.calc.txt2.value);
   num3 = num1 / num2;
   document.calc.txt3.value = num3;
   console.log(num3);
 };
 divNum.addEventListener("click", divOperation);