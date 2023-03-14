const numbers = document.querySelectorAll('.buttons > .numbers');
const output = document.querySelector('.output');
const equal = document.querySelector('.equal');
const opp = document.querySelectorAll('.buttons > .op');
const headEq = document.querySelector('.equation');

let equation = [];
let total = [];

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
        // total.push([outcome]);
        return outcome
        
}

let num1 = document.createElement('span');
let sign = document.createElement('span');
let num2 = document.createElement('span');

function operand() {
    opp.forEach(function(opp) {
        opp.addEventListener('click', (e) => {
            if(equation.length >= 2) {
                let btn = e.target.id;
                equation.splice(2,2,[output.textContent]);
                
                headEq.append(output.textContent);
                output.textContent = "";
                operate();
                equation.splice(1, 1, [btn]);
                headEq.append(e.target.id)
                output.append(operate());
                equation.splice(0,0,[output.textContent]);
                console.log(equation);
                console.log(total);
            } else{
            equation.push([output.textContent]);
            let btn = e.target.id;
            output.appendChild(sign);
            sign.textContent = btn;
            equation.push([btn]);
            headEq.append(output.textContent);
            output.textContent = "";
            console.log(equation);
            }
        }) 
    });
}

function value(){
    numbers.forEach(function(numbers) {
        numbers.addEventListener('click', (e) => {
            if(equation.length >= 4){
                // headEq.append(output.textContent);
                
                output.textContent = "";
                let btn = e.target.id;
                output.append(btn);          
                console.log(equation);
            } else {
                let btn = e.target.id;
                output.append(btn);          
                console.log(equation);
            }
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
    
})

function strinEq() {

} 

value();
operand();






