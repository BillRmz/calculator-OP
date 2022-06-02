//Seleccionar todos los botones

const btnNumbers = document.getElementsByName("key-num");
const btnOperator = document.getElementsByName("key-operator");
const btnEqual = document.querySelector("#equal");

const showInput = document.querySelector(".show-input");
const btnAc = document.querySelector("#ac");
const btnDel = document.querySelector("#del");

let display = "";
let operator = "";
let a = 0;
let b = 0;

btnEqual.addEventListener("click", equalReg);
btnAc.addEventListener("click", allClear);
btnDel.addEventListener("click", deleteDigit);

btnNumbers.forEach(function (button) {
  button.addEventListener("click", function () {
    let num = button.innerHTML.toString();
    display = display.toString() + num;
    showInput.textContent = display;
  });
});

btnOperator.forEach(function (button) {
  button.addEventListener("click", function () {
    operator = button.innerHTML.toString();
    a = parseFloat(showInput.innerHTML);
    refreshDisplay();
    console.log(a);
    console.log(operator);
  });
});

function deleteDigit() {
  let str = display.slice(0, -1);
  display = str;
  showInput.textContent = display;
}

function allClear() {
  display = "";
  operator = "";
  a = 0;
  b = 0;
  showInput.textContent = "";
}

function equalReg() {
  b = parseFloat(showInput.innerHTML);
  calculate();
}

function refreshDisplay() {
  showInput.textContent = "";
  display = "";
}

function calculate() {
  let res = 0;
  switch (operator) {
    case "+":
      res = parseFloat(a) + parseFloat(b);
      break;
    case "-":
      res = parseFloat(a) - parseFloat(b);
      break;
    case "x":
      res = parseFloat(a) * parseFloat(b);
      break;
    case "/":
      res = parseFloat(a) / parseFloat(b);
      break;

    default:
      break;
  }

  showInput.textContent = Math.round(res * 10) / 10;
}

console.log(display);
