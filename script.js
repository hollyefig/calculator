//grab calcGrid, mainNum display and secondNum display
const calcGrid = document.querySelector(".calcGrid"),
  mainNum = document.querySelector(".mainNum"),
  // grab formula display div
  secondNum = document.querySelector(".secondNum");

// div for main number
const mainNumChild = document.createElement("div");
mainNumChild.setAttribute("class", "mainNum");
mainNum.appendChild(mainNumChild);

let num = [];
let allNums = [];
let expression;
let formulaDisplay = [];
let finalResult;
mainNumChild.textContent = "0";

const eraseAll = () => {
  num = [];
  allNums = [];
  expression = undefined;
  formulaDisplay = [];
  mainNumChild.textContent = "0";
  secondNum.textContent = "";
  finalResult = undefined;
};

const erase = () => {
  num.pop();
  formulaDisplay.pop();
  secondNum.textContent = formulaDisplay.join("");
};

const add = (e) => {
  return e.reduce((a, b) => a + b, 0);
};
const subtract = (e) => {
  return e.reduce((a, b) => a - b);
};
const multi = (e) => {
  return e.reduce((a, b) => a * b);
};
const divide = (e) => {
  return e.reduce((a, b) => a / b);
};

// operate!
const operate = (e) => {
  if (expression !== "equal") {
    let joinNum = num.join("");
    allNums.push(Number(joinNum));
  } else {
    formulaDisplay = [finalResult];
  }

  if (finalResult === undefined && allNums.length === 2) {
    if (expression === "add") {
      finalResult = add(allNums);
    } else if (expression === "subtract") {
      finalResult = subtract(allNums);
    } else if (expression === "multiply") {
      finalResult = multi(allNums);
    } else if (expression === "divide") {
      finalResult = divide(allNums);
    }
    allNums = [];
    allNums.push(finalResult);
  } else if (allNums.length === 2) {
    if (expression === "add") {
      let result = add(allNums);
      finalResult = result;
    } else if (expression === "subtract") {
      let result = subtract(allNums);
      finalResult = result;
    } else if (expression === "multiply") {
      let result = multi(allNums);
      finalResult = result;
    } else if (expression === "divide") {
      let result = divide(allNums);
      finalResult = result;
    }
    allNums = [];
    allNums.push(finalResult);
  }

  finalResult !== undefined ? (mainNumChild.textContent = finalResult) : null;

  if (e.id === "add") {
    expression = "add";
    formulaDisplay.push("+");
  } else if (e.id === "subtract") {
    expression = "subtract";
    formulaDisplay.push("-");
  } else if (e.id === "multiply") {
    expression = "multiply";
    formulaDisplay.push("x");
  } else if (e.id === "divide") {
    expression = "divide";
    formulaDisplay.push("÷");
  } else if (e.id === "equal") {
    expression = "equal";
    mainNumChild.textContent = finalResult;
  }
  secondNum.textContent = formulaDisplay.join("");
  num = [];
};

const numEntered = (e) => {
  num.push(e.innerText);
  formulaDisplay.push(e.innerText);
  secondNum.textContent = formulaDisplay.join("");
};
