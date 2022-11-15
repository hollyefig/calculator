//grab calcGrid, mainNum display and secondNum display
const calcGrid = document.querySelector(".calcGrid"),
  mainNum = document.querySelector(".mainNum"),
  secondNum = document.querySelector(".secondNum");

// div for main number
const mainNumChild = document.createElement("div");
mainNumChild.setAttribute("class", "mainNum");
mainNum.appendChild(mainNumChild);

let baseNum = [];
let prevNum;
let expression;
let allNums = [];
let finalResult;

const eraseAll = () => {
  baseNum = [];
  prevNum = 0;
  expression = 0;
  allNums = [];
  finalResult = 0;
  mainNumChild.textContent = 0;
  secondNum.textContent = "";
  console.log("clear clicked");
};

const numEntered = (e) => {
  baseNum.push(e.value);
  mainNumChild.textContent = baseNum.join("");
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
