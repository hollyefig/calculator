//grab calcGrid, mainNum display and secondNum display
const calcGrid = document.querySelector(".calcGrid"),
  mainNum = document.querySelector(".mainNum"),
  secondNum = document.querySelector(".secondNum");

// div for main number
const mainNumChild = document.createElement("div");
mainNumChild.setAttribute("class", "mainNum");
mainNum.appendChild(mainNumChild);

let baseNum = [0];
let prevNum;
let expression;
let allNums = [];
let finalResult;
mainNumChild.textContent = 0;

const numEntered = (e) => {
  if (baseNum[0] === 0) {
    baseNum.shift();
  }
  baseNum.push(e.value);
  mainNumChild.textContent = baseNum.join("");
};

const eraseAll = () => {
  baseNum = [0];
  prevNum = 0;
  expression = 0;
  allNums = [];
  finalResult = 0;
  mainNumChild.textContent = 0;
  secondNum.textContent = "";
};

const express = (e) => {
  mainNumChild.textContent = "";
  finalResult === undefined
    ? (secondNum.textContent = baseNum.join(""))
    : (secondNum.textContent = finalResult);
  prevNum = Number(baseNum.join(""));
  if (e.id === "add") {
    expression = "add";
  } else if (e.id === "subtract") {
    expression = "subtract";
  } else if (e.id === "multiply") {
    expression = "multiply";
  } else if (e.id === "divide") {
    expression = "divide";
  }
  baseNum = [];
};

const operate = () => {
  mainNumChild.textContent = "";
  secondNum.textContent = baseNum.join("");
  if (expression === "add") {
    let newNum = Number(baseNum.join(""));
    finalResult === undefined ? null : (prevNum = finalResult);
    let result = prevNum + newNum;
    finalResult = result;
  } else if (expression === "subtract") {
    let newNum = Number(baseNum.join(""));
    finalResult === undefined ? null : (prevNum = finalResult);
    let result = prevNum - newNum;
    finalResult = result;
  } else if (expression === "multiply") {
    let newNum = Number(baseNum.join(""));
    finalResult === undefined ? null : (prevNum = finalResult);
    let result = prevNum * newNum;
    finalResult = result;
  } else if (expression === "divide") {
    let newNum = Number(baseNum.join(""));
    finalResult === undefined ? null : (prevNum = finalResult);
    let result = prevNum / newNum;
    finalResult = result;
  }
  mainNumChild.textContent = finalResult;
  baseNum = [];
};

const backspace = () => {
  baseNum.pop();
  mainNumChild.textContent = baseNum.join("");
};
