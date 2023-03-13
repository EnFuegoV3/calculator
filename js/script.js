const numbers = document.querySelectorAll('.buttons > .numbers');
const output = document.querySelector('.output');
const equal = document.querySelector('.equal');
const opp = document.querySelectorAll('.buttons > .op');
const headEq = document.querySelector('.equation');

let equation = [];

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
    let a = Number(equation[0]);
    let b = Number(equation[2]);
    let c = equation[1];
    let outcome
    if(c == '+'){
        outcome = addition(a, b);
    } else if(c == '-') {
        outcome = subtraction(a, b);
    } else if(c == 'x'){
        outcome = multiply(a, b);
    } else if(c == '/'){
        outcome = division(a,b).toFixed(5);
    }
        return outcome
}

let num1 = document.createElement('span');
let sign = document.createElement('span');
let num2 = document.createElement('span');

function operand() {
    opp.forEach(function(opp) {
        opp.addEventListener('click', (e) => {
            equation.push([output.textContent]);
            let btn = e.target.id;
            output.appendChild(sign);
            sign.textContent = btn;
            // equation.opp = [btn];
            equation.push([btn])
            headEq.append(output.textContent);
            output.textContent = "";
            // console.log(equation.opp);
        }) 
    });
}

function value(){
    numbers.forEach(function(numbers) {
        numbers.addEventListener('click', (e) => {
            let btn = e.target.id;
            output.append(btn);          
            // console.log(equation.numbers);
        })  
    });
}

equal.addEventListener('click', ()=>{
    equation.push([output.textContent]);
    headEq.append(output.textContent);
    output.textContent = "";
    operate();
    headEq.append('=')
    output.append(operate());
    console.log(equation);
})

value();
operand();






