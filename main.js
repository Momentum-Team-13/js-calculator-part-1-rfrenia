console.log("hi world")

let keys = document.querySelectorAll('.number');
console.log(keys);


console.log(keys[2].classList);

for (let number of keys) {
    number.addEventListener('click', function (event) {
      console.log(event.target.textContent);

    })}

    { const clearButton = document.querySelector('button.clear')
    function buttonclick (){
        document.getElementById("a").innerHTML = ''
    }
    clearButton.addEventListener('click', buttonclick)
}
    for (let number of keys) {
        number.addEventListener('click', function (event) {
            document.getElementById("a").innerHTML = event.target.textContent
    
        })}

        let equalButton = document.querySelector('.equal');
        console.log(equalButton);

       function equal() {
            let i = 0  ;
                for (let number of keys) {
                    number.addEventListener('click', function (event) {
                    document.getElementById("a").innerHTML = event.target.textContent + i++
            })
        } }
    
        equalButton.addEventListener('click', function (event) {
            equal() ;
     } )
     

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