const numbers = document.querySelectorAll('.buttons > .numbers');
const output = document.querySelector('.output');
const equal = document.querySelector('.equal');
const opp = document.querySelectorAll('.buttons > .op');
const headEq = document.querySelector('.equation');

let firstNum
let secondNum
let operand
let outcome
let holler

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
    let a = Number(firstNum);
    let b = Number(secondNum);
    let c = operand;
    
    if(c == '+'){
        outcome = addition(a, b);
    } else if(c == '-') {
        outcome = subtraction(a, b);
    } else if(c == 'x'){
        outcome = multiply(a, b);
    } else if(c == '/'){
        outcome = division(a,b).toFixed(4);
    }
        return outcome
}

let num1 = document.createElement('span');
let sign = document.createElement('span');
let num2 = document.createElement('span');

function display() {
    if(firstNum === 'string' && output.textContent === 'string'){
        opp.forEach(function(opp) {
            opp.addEventListener('click', (e) => {
                specialEquals();
            
            }) 
        });
    }
    else {numbers.forEach(function(numbers) {
        numbers.addEventListener('click', (e) => {
            let btn = e.target.id;
            output.append(btn);          
        })  
    });
    opp.forEach(function(opp) {
        opp.addEventListener('click', (e) => {
            firstNum = output.textContent;
            let btn = e.target.id;
            output.appendChild(sign);
            sign.textContent = btn;
            operand = btn;
            headEq.append(output.textContent);
            output.textContent = ""; 
        }) 
    });
    equal.addEventListener('click', ()=>{
        secondNum = output.textContent;
        headEq.append(output.textContent);
        output.textContent = "";
        operate();
        headEq.append('=')
        output.append(operate());
        console.log(firstNum, secondNum, operand);
    });
    }
        
    
}

// function value(){
//     numbers.forEach(function(numbers) {
//         numbers.addEventListener('click', (e) => {
//             let btn = e.target.id;
//             output.append(btn);          
//         })  
//     });
// }

// equal.addEventListener('click', ()=>{
//     secondNum = output.textContent;
//     headEq.append(output.textContent);
//     output.textContent = "";
//     operate();
//     headEq.append('=')
//     output.append(operate());
//     console.log(firstNum, secondNum, operand);
// })

function specialEquals()  {
    equal.addEventListener('click', ()=>{
        secondNum = output.textContent;
        // headEq.append(output.textContent);
        // output.textContent = "";
        operate();
        // headEq.append('=')
        output.append(operate());
        console.log(firstNum, secondNum, operand);
        
    }) 
}
// value();
display();






