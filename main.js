
const keys = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const display = document.querySelector('.display');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');

let displayText = '';
let operator;
let stored;

function total() {
  const displayNumber = Number(displayText);

  if (operator === "+" ) {
    displayText = displayNumber + stored;
  } else if (operator === "X" ) {
    displayText = displayNumber * stored;
  } else if (operator === "-" ) {
    displayText = stored - displayNumber;
  } else if (operator === "/" ) {
    displayText = stored / displayNumber; 
  }

  display.textContent = displayText
}

function clearingDisplay(){
  displayText = '';
  display.textContent = displayText;
}

function updateNumberDisplay(event) {
  console.log('clicked on number/decimal button', event.target.textContent);
  displayText += event.target.textContent;
  display.textContent=displayText;
}

function addOperator(event) {
  console.log('clicked on symbol', event.target.textContent);
  operator = event.target.textContent;
  stored = Number(displayText);
  displayText = '';
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