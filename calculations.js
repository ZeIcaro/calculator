function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

// Global variables

let x
let y
let operation

function operate (operator, x, y) {
    if (operator === "add") {
        return add (x, y);
    } else if (operator === "subtract") {
        return subtract (x, y);
    } else if (operator === "multiply") {
        return multiply (x, y);
    } else {
        return divide (x, y);
    }
}


// Highlights buttons styles on mouseover

function highlightButton () {
    let buttonsArray = document.querySelectorAll(".button");

    buttonsArray.forEach(function(elem) {

        elem.addEventListener("mouseover", () => {
            elem.classList.add("highlight");
        });

        elem.addEventListener("mouseout", () => {
            elem.classList.remove("highlight");
        });

    });
};


highlightButton();



// input Screen

let inputScreen = document.querySelector(".input-screen");



// Populates the Input Screen with numbers pressed

const onClickNumbers = function () {
    let command;
    command = this.id;
    console.log(command);

    if (command === "plusminus") {
        y = -y
    } else if (command === "dot") {
        if (Number.isInteger(y)) {
            y = y + ".";
        } else {
            y = y;
        };
    } else if (!y) {
        y = Number(command);
    } else {
        y = Number(y + command);
    }        
    
    inputScreen.textContent = y;
}


// Returns the number or character corresponding to each button when pressed --- For Gray Buttons (number input)

function pressNumber () {
    let numbersArray = document.querySelectorAll(".gray-button");

    numbersArray.forEach(function(elem) {
        elem.addEventListener("click", (onClickNumbers));
    });
}


pressNumber();


// Selects operation based on Operand selection

const onClickOperands = function () {
    let command;
    command = this.id;
    console.log(command);

    if (command === "plus") {
        operation = "add"
        x = y
        y = null
    } else if (command === "minus") {
        operation = "subtract"
        x = y
        y = null
    } else if (command === "multiply") {
        operation = "multiply"
        x = y
        y = null
    } else if (command === "divide") {
        operation = "divide"
        x = y
        y = null
    } else {
        y = operate (operation, x, y)
        inputScreen.textContent = y;
    }


    console.log(operation);
    console.log(x);
    console.log(y);
};


// Returns the operand corresponding to each button when pressed --- For Operands Buttons (operators)

function pressOperand () {
    let operandsArray = document.querySelectorAll(".operands");

    operandsArray.forEach(function(elem) {
        elem.addEventListener("click", (onClickOperands));
    });
}


pressOperand();






