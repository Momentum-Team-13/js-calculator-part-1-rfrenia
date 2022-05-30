
const keys = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const display = document.querySelector('.display');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');

let result = '';
let displayValue;
let operator;
let stored;

function total() {
  if (operator === "+" ) {
    displayValue = displayValue + stored
  } else if (operator === "X" ) {
    displayValue = displayValue * stored 
  } else if (operator === "-" ) {
    displayValue = stored - displayValue 
  } else if (operator === "/" ) {
    displayValue = stored / displayValue 
  }

  display.textContent = displayValue
}

function clearingDisplay(){
  displayValue = ''
  result = ''
  display.textContent = displayValue
}

function updateNumberDisplay(event) {
  console.log('clicked on number/decimal button', event.target.textContent);
  result += event.target.textContent;
  display.textContent=result;
  displayValue = Number(result);
}

function addOperator(event) {
  console.log('clicked on symbol', event.target.textContent);
  operator = symbol.textContent ;
  stored = displayValue ;
  result = '' ;
}

// (let number of keys) when numbers and decimal are clicked they
//display and convert from string into numbers for calculating.
for (let number of keys) {
  number.addEventListener('click', updateNumberDisplay)
}

for (let symbol of symbols) {
  symbol.addEventListener('click', addOperator)
}

equalButton.addEventListener ('click', total)
clearButton.addEventListener('click', clearingDisplay)

// // //getElementById

// // //eventDelegation

// // //(event.target.textContent) ***

// //onclick="print()" 

// //display.appendChild(nameoftheelement