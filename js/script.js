const buttons = document.querySelectorAll('div.buttons > button');
const output = document.querySelector('.output');

// buttons.forEach(function(button) {
//     button.addEventListener('click', (e) => {
//         console.log(e);
//         let btn = e.target.id;
//         console.log(btn)
//         output.append(btn);
//     });
        
// })

const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
    output.textContent = "";
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

function firstValue() {
    buttons.forEach(function(button) {
        button.addEventListener('click', (e) => {
            let btn = e.target.id;
            output.append(btn);
        });  
    })
}

function operand() {
    buttons.forEach(function(button) {
        button.addEventListener('click', (e) => {
            let btn = e.target.id;
            output.append(btn);
        });  
    })
}

function secValue(){
    buttons.forEach(function(button) {
        button.addEventListener('click', (e) => {
            let btn = e.target.id;
            output.append(btn);
        });  
    })
}
