
let Cal = (x) => {
  let nm1 = document.querySelector("#num1").value;
  let nm2 = document.querySelector("#num2").value;
  let res = document.querySelector(".res");
  let operator = x.value;

  nm1 = Number(nm1);
  nm2 = Number(nm2);

  switch (operator) {
    case "+":
      res.innerHTML = nm1 + nm2;
      break;

    case "-":
      res.innerHTML = nm1 - nm2;
      break;

    case "*":
      res.innerHTML = nm1 * nm2;
      break;

    case "/":
      res.innerHTML = nm1 / nm2;
      break;
  }
};