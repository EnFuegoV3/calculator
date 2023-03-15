const numbers = document.querySelectorAll('.buttons > .numbers');
const output = document.querySelector('.output');
const equal = document.querySelector('.equal');
const opp = document.querySelectorAll('.buttons > .op');
const headEq = document.querySelector('.equation');

let firstNum
let secondNum
let operand
let answer
let count = 0;

// opp.forEach(function(opp) {
//     opp.addEventListener('click', (e) => {
//         operand = e.target.id
//     })})

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
        // answer = outcome;
        return outcome
}

let num1 = document.createElement('span');
let sign = document.createElement('span');
let num2 = document.createElement('span');

function display() {
    numbers.forEach(function(numbers) {
        numbers.addEventListener('click', (e) => {
            if(count >= 1) {
                output.textContent = "";
                let btn = e.target.id;
                output.append(btn);   
                secondNum = output.textContent;
            }
            output.textContent = "";
            let btn = e.target.id;
            output.append(btn);          
        })  
    });
    opp.forEach(function(opp) {
        opp.addEventListener('click', (e) => {
            if(count >= 1){
                operate();
                firstNum = operate();
                operand = e.target.id
                
                
                
            } else {
            count++;
            firstNum = output.textContent;
            let btn = e.target.id;
            output.appendChild(sign);
            sign.textContent = btn;
            operand = btn;
            headEq.append(output.textContent);
            output.textContent = ""; 
            console.log(firstNum, secondNum, operand, answer);
            console.log(count);
            }
        }) 
    });
    equal.addEventListener('click', ()=>{
        secondNum = output.textContent;
        headEq.append(output.textContent);
        output.textContent = "";
        operate();
        answer = operate();
        headEq.append('=')
        output.append(operate());
        
    });
    console.log(firstNum, secondNum, operand, answer);   
  
}
// while(count >= 1){
//     specialEquals();
// }   
// function specialEquals()  {
//     opp.forEach(function(opp) {
//         opp.addEventListener('click', (e) => {
//             secondNum = output.textContent;
//             headEq.append(output.textContent);
//             output.textContent = "";
//             operate();
            
//             headEq.append('=')
//             output.append(operate());
//         }) 
//     });
// }
// value();
display();
console.log(firstNum)