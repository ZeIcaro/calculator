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

    // scenario 1 - select operation after typing 1st value for the first time
    if (typeof x !== "number" && typeof y === "number" && !operation) {
        
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
            operation = null
        };

        console.log(operation, x, y)
        
    // scenario 2 - typed the 1st value and operation, but no 2nd value
    } else if (typeof x === "number" && typeof y !== "number" && operation) {
        
        if (command === "plus") {
            operation = "add"
        } else if (command === "minus") {
            operation = "subtract"
        } else if (command === "multiply") {
            operation = "multiply"
        } else if (command === "divide") {
            operation = "divide"
        } else {
            operation = null
        };

        console.log(operation, x, y)

    // scenario 3 - typed 1st value, followed by operation, followed by 2nd value
    } else if (typeof x === "number" && typeof y === "number" && operation) {
        
        y = operate (operation, x, y)
        inputScreen.textContent = y
        x = y
        y = null

        if (command === "plus") {
            operation = "add"
        } else if (command === "minus") {
            operation = "subtract"
        } else if (command === "multiply") {
            operation = "multiply"
        } else if (command === "divide") {
            operation = "divide"
        } else {
            operation = null
        };

        console.log(operation, x, y)

    // scenario 4 - after executing scenario 3 and pressing "equal" (resets operation), press one of the operations 
    // (will only select the next operation and send to scenario 2, or 3 if the user types the next number (y) afterwards)
    } else if (typeof x === "number" && typeof y !== "number" && !operation) {

        if (command === "plus") {
            operation = "add"
        } else if (command === "minus") {
            operation = "subtract"
        } else if (command === "multiply") {
            operation = "multiply"
        } else if (command === "divide") {
            operation = "divide"
        } else {
            operation = null
        };

        console.log(operation, x, y)

    // scenario 5 - after executing scenario 3, typed another number (y), and then select the operation
    } else if (typeof x === "number" && typeof y === "number" && !operation) {
        
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
            operation = null
        };

        console.log(operation, x, y)
    }
};


// Returns the operand corresponding to each button when pressed --- For Operands Buttons (operators)

function pressOperand () {
    let operandsArray = document.querySelectorAll(".operands");

    operandsArray.forEach(function(elem) {
        elem.addEventListener("click", (onClickOperands));
    });
}

pressOperand();


// Resets Calculator

const onClickReset = function () {
    let command;
    command = this.id;

    if (command === "AC" || command === "C") {
        y = null
        x = null
        operation = null

        inputScreen.textContent = 0
    };
    };


// Returns the number or character corresponding to each button when pressed --- For Red Buttons (reset)

function pressReset () {
    let resetArray = document.querySelectorAll(".red-button");

    resetArray.forEach(function(elem) {
        elem.addEventListener("click", (onClickReset));
    });
}


pressReset();




