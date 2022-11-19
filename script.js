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
mainNumChild.textContent = "";

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

const operate = (e) => {
  if (expression !== "equal") {
    allNums.push(Number(num.join("")));
  } else {
    formulaDisplay = [finalResult];
  }

  // if addition
  if (expression === "add") {
    if (finalResult === undefined && allNums.length === 2) {
      finalResult = add(allNums);
      mainNumChild.textContent = finalResult;
      allNums = [];
      allNums.push(finalResult);
    } else if (allNums.length === 2) {
      let result = add(allNums);
      finalResult = result;
      mainNumChild.textContent = finalResult;
      allNums = [];
      allNums.push(finalResult);
    }
  }
  // if subtraction
  if (expression === "subtract") {
    if (finalResult === undefined && allNums.length === 2) {
      finalResult = subtract(allNums);
      mainNumChild.textContent = finalResult;
      allNums = [];
      allNums.push(finalResult);
    } else if (allNums.length === 2) {
      let result = subtract(allNums);
      finalResult = result;
      mainNumChild.textContent = finalResult;
      allNums = [];
      allNums.push(finalResult);
    }
  }

  // if multiply
  if (expression === "multiply") {
    if (finalResult === undefined && allNums.length === 2) {
      finalResult = multi(allNums);
      mainNumChild.textContent = finalResult;
      allNums = [];
      allNums.push(finalResult);
    } else if (allNums.length === 2) {
      let result = multi(allNums);
      finalResult = result;
      mainNumChild.textContent = finalResult;
      allNums = [];
      allNums.push(finalResult);
    }
  }

  // if divide
  if (expression === "divide") {
    if (finalResult === undefined && allNums.length === 2) {
      finalResult = divide(allNums);
      mainNumChild.textContent = finalResult;
      allNums = [];
      allNums.push(finalResult);
      console.log("allNums after RESET", Number(allNums.join("")));
    } else if (allNums.length === 2) {
      let result = divide(allNums);
      finalResult = result;
      mainNumChild.textContent = finalResult;
      allNums = [];
      allNums.push(finalResult);
    }
  }

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

  console.log("current expression", expression);
};

const numEntered = (e) => {
  num.push(Number(e.innerText));
  console.log("numArray", num);
  formulaDisplay.push(e.innerText);
  secondNum.textContent = formulaDisplay.join("");
};
