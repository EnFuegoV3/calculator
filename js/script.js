const numbers = document.querySelectorAll('.buttons > .numbers');
const output = document.querySelector('.output');
const equal = document.querySelector('.equal');
const opp = document.querySelectorAll('.buttons > .op');
const headEq = document.querySelector('.equation');

// equal.addEventListener('click', operate());
let equation = [];



// numbers.forEach(function(){
//     numbers.addEventListener('click',() => {

//     })
// })
    
// // numbers.addEventListener('click', (e) => {
// //     let num = e.target.id;
// //     output.append(num);
// // })



const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
    location.reload();
})

function addition(x,y) {
    return x + y;
};

function subtraction(x,y) {
    return x - y;
};

function multiply(x,y) {
    return x * y;
};

function division(x,y) {
    return x / y;
};




function operate() {
    let a
    let b
    let op
    if(op = '+'){
        addition(a, b);
    } else if(op = '-') {
        subtraction(a, b);
    } else if(op = 'x'){
        multiply(a, b);
    } else if(op ='/'){
        division(a,b);
    }
}

let num1 = document.createElement('span');
let sign = document.createElement('span');
let num2 = document.createElement('span');


// function display() {
//     let num1 = document.createElement('span');
//     let sign = document.createElement('span');
//     let num2 = document.createElement('span');
//     numbers.forEach(function(numbers) {
//         numbers.addEventListener('click', (e) => {
//             if(sign.textContent == "") {
//             let btn = e.target.id;
//             output.appendChild(num1);
//             num1.append(btn);
//             equation.first = num1.textContent;        
//         } else {output.removeChild(sign);
//                 headEq.appendChild(sign);
//                 let btn = e.target.id;
//                 output.appendChild(num2);
//                 num2.append(btn);
//                 equation.second = num2.textContent;
//                 } 
//             })})
    
//     opp.forEach(function(opp) {
//         opp.addEventListener('click', (e) => {
//             output.removeChild(num1);
//             headEq.appendChild(num1);
//             let btn = e.target.id;
//             output.appendChild(sign);
//             sign.textContent = btn;
//             equation.opp = btn;
//             console.log(equation.opp);
//         }) 
//     });
    
// }

function operand() {
    opp.forEach(function(opp) {
        opp.addEventListener('click', (e) => {
            equation.push([output.textContent]);
            let btn = e.target.id;
            output.appendChild(sign);
            sign.textContent = btn;
            equation.opp = [btn];
            // equation.push([btn])
            headEq.append(output.textContent);
            output.textContent = "";
            console.log(equation.opp);
        }) 
    });
}

function value(){
    numbers.forEach(function(numbers) {
        numbers.addEventListener('click', (e) => {
            let btn = e.target.id;
            output.append(btn);          
            console.log(equation.numbers);
        })  
    });
}

equal.addEventListener('click', ()=>{
    equation.push([output.textContent]);
    headEq.append(output.textContent);
    output.textContent = "";
    console.log(equation);
})

value();
operand();






