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
  console.log("allNums in operate", allNums);

  // if addition
  if (expression === "add") {
    if (finalResult === undefined && allNums.length === 2) {
      finalResult = add(allNums);
      allNums = [];
      allNums.push(finalResult);
    } else if (allNums.length === 2) {
      let result = add(allNums);
      finalResult = result;
      allNums = [];
      allNums.push(finalResult);
    }
  }
  // if subtraction
  if (expression === "subtract") {
    if (finalResult === undefined && allNums.length === 2) {
      finalResult = subtract(allNums);
      allNums = [];
      allNums.push(finalResult);
    } else if (allNums.length === 2) {
      let result = subtract(allNums);
      finalResult = result;
      allNums = [];
      allNums.push(finalResult);
    }
  }

  // if multiply
  if (expression === "multiply") {
    if (finalResult === undefined && allNums.length === 2) {
      finalResult = multi(allNums);
      allNums = [];
      allNums.push(finalResult);
    } else if (allNums.length === 2) {
      let result = multi(allNums);
      finalResult = result;
      allNums = [];
      allNums.push(finalResult);
    }
  }

  // if divide
  if (expression === "divide") {
    if (finalResult === undefined && allNums.length === 2) {
      finalResult = divide(allNums);
      allNums = [];
      allNums.push(finalResult);
    } else if (allNums.length === 2) {
      let result = divide(allNums);
      finalResult = result;
      allNums = [];
      allNums.push(finalResult);
    }
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
