
const keys = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const display = document.querySelector('.display');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');

let displayText = '';
let operator;
let stored;

//simplifying the display content
function updateDisplayText() {
  display.textContent = displayText
}

//evaluating mathematical expressions
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

  updateDisplayText()  
}

//clearing the calculator input
function clearingDisplay(){
  displayText = '';
  operator = '';
  updateDisplayText();
}

//displays the number clicked
function updateNumberDisplay(event) {
  console.log('clicked on number/decimal button', event.target.textContent);
  displayText += event.target.textContent;
  updateDisplayText();
}

//truthy statement to run the "total" function each time an operator is clicked
function addOperator(event) {
  console.log('clicked on symbol', event.target.textContent);

  if (operator ) {
    total()
  } 
  stored = Number(displayText);
  displayText = '';
  operator = event.target.textContent;
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