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

// Runs highlightButton function to make them highlighteable
highlightButton();


// Returns the number or character corresponding to each button when pressed

const onClick = function () {
    console.log(this.id);
}

function pressNumber () {
    let numbersArray = document.querySelectorAll(".gray-button");

    numbersArray.forEach(function(elem) {
        elem.addEventListener("click", (onClick));
    });
}

pressNumber();
