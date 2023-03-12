const numbers = document.querySelectorAll('.buttons > .numbers');
const output = document.querySelector('.output');
const equal = document.querySelector('.equal');
const opp = document.querySelectorAll('.buttons > .op');
const headEq = document.querySelector('.equation');

// equal.addEventListener('click', operate());
let equation = {
    first: null,
    opp: null,
    second: null,
}



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
let num2 = document.createElement('div');


function firstValue() {
    // let num1 = document.createElement('span');
    // let sign = document.createElement('span');
    // let num2 = document.createElement('div');
    numbers.forEach(function(numbers) {
        numbers.addEventListener('click', (e) => {
            let btn = e.target.id;
            output.appendChild(num1);
            num1.append(btn);
            equation.first = num1.textContent;
            
            // console.log(equation.first)          
        })  
    });
    // opp.forEach(function(opp) {
    //     opp.addEventListener('click', (e) => {
    //         output.removeChild(num1);
    //         headEq.appendChild(num1);
    //         let btn = e.target.id;
    //         output.appendChild(sign);
    //         sign.textContent = btn;
    //         equation.opp = btn;
    //         console.log(equation.opp);
    //     }) 
    // });
    // numbers.forEach(function(numbers) {
    //     numbers.addEventListener('click', (e) => {
    //         output.removeChild(sign);
    //         headEq.appendChild(sign);
    //         let btn = e.target.id;
    //         output.appendChild(num2);
    //         num2.append(btn);
    //         equation.second = num2.textContent;
    //     })  
    // });
}

function operand() {
    opp.forEach(function(opp) {
        opp.addEventListener('click', (e) => {
            output.removeChild(num1);
            headEq.appendChild(num1);
            let btn = e.target.id;
            output.appendChild(sign);
            sign.textContent = btn;
            equation.opp = btn;
            console.log(equation.opp);
        }) 
    });
}

function secValue(){
    numbers.forEach(function(numbers) {
        numbers.addEventListener('click', (e) => {
            output.removeChild(sign);
            headEq.appendChild(sign);
            let btn = e.target.id;
            output.appendChild(num2);
            num2.append(btn);
            equation.second = num2.textContent;
        })  
    });
}
function display() {
    firstValue();
    operand();
    secValue;
}

display();


