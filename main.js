
let keys = document.querySelectorAll('.number');
console.log(keys);

let symbols = document.querySelectorAll('.symbol');

let display = document.querySelector('.display');

let result = ''

let equalButton = document.querySelector('#equal');

let clearButton = document.querySelector('#clear')


console.log(equalButton);
console.log(clearButton);
console.log(keys[2].classList);
console.log(display)


let displayValue ;
let operator ;

for (let number of keys) {
    number.addEventListener('click', function (event) {
    console.log(event.target.textContent);
    result += (event.target.textContent);
    displayValue = Number (result)
    display.textContent=displayValue
        
    })}

    let stored ;

for (let symbol of symbols) {
    symbol.addEventListener('click', function (event) {
    console.log(event.target.textContent);
    operator = symbol.textContent ;
    stored = displayValue ;
    result = ''
    })}


function total() {
    if (operator === "+" ) {
    displayValue = displayValue + stored }
    else if (operator === "X" ) {
    displayValue = displayValue * stored }
    //else if (operator === "-" ) {
    //displayValue = displayValue - stored }
    // else if (operator === "/" ) {
    //     displayValue = displayValue / stored }
    display.textContent = displayValue 
}
equalButton.addEventListener ('click', total)

let clearing ;

function clearingDisplay(){
    clearing = ''
    display.textContent = clearing
}

clearButton.addEventListener('click', clearingDisplay)
  



    // number.addEventListener('click', function (event) {
    //     function buttonclick (){
    //         result += (event.target.textContent);
    //         display.textContent=result
    // } )

    // for (let number of keys) {
    //     number.addEventListener('click', function (event) {
    //         document.getElementById("a").innerHTML = event.target.textContent
    
    //     })}
     

//   function print() {
//     document.getElementById("a").innerHTML = 
//          numberButton = document.querySelector('button.number')
//          function buttonclick() {
//             alert(7)
//             } 
//    numberButton.addEventListener('click', buttonclick)
// }
//     ;


// let eight = document.getElementById("8").textContent
// let seven = document.getElementById("7").textContent



// { const clearButton = document.querySelector('button.clear')
// function buttonclick (){
//     document.getElementById("a").innerHTML = ''
// }
// clearButton.addEventListener('click', buttonclick)
// }

// //    function print() {
// //      document.getElementById("a").innerHTML = 

// { const numberButton = document.querySelector('button.number7')
// function buttonclick (){
//     document.getElementById("a").innerHTML = seven
// }
// numberButton.addEventListener('click', buttonclick)
// }

// {  
// const numberButton = document.querySelector('button.number8')
// function buttonclick (){
//     document.getElementById("a").innerHTML = eight
//     }
// numberButton.addEventListener('click', buttonclick)
// }

// // { const numberButton = document.querySelector('button.number9')
// //     numberButton.addEventListener('click', function (event) {
// //    event.target.textContent
// //   })
// // }
//   // }



// // // for let button.number of numberButton {
// // //     button.number.addEventListener('click', function (event) {
// // //     console.log(event.target)
// // //     // event.target.classList.remove("unhighlight");
// // //     // event.target.classList.add("highlight");
// // //     }
// // // }


// // //getElementById

// // //eventDelegation

// // //(event.target.textContent) ***

// //onclick="print()" 

// //display.appendChild(nameoftheelement