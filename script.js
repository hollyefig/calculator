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
    console.log("num in sub", prevNum);
  } else if (e.id === "multiply") {
    expression = "multiply";
    console.log("num in sub", prevNum);
  } else if (e.id === "divide") {
    expression = "divide";
    console.log("num in divide", prevNum);
  }
  baseNum = [];
};

const operate = () => {
  mainNumChild.textContent = "";
  secondNum.textContent = baseNum.join("");
  if (expression === "add") {
    let newNum = Number(baseNum.join(""));
    let result = prevNum + newNum;
    allNums.push(result);
    finalResult = allNums.reduce((a, b) => a + b, 0);
  } else if (expression === "subtract") {
    let newNum = Number(baseNum.join(""));
    let result = prevNum - newNum;
    allNums.push(result);
    finalResult = allNums.reduce((a, b) => a + b, 0);
  } else if (expression === "multiply") {
    let newNum = Number(baseNum.join(""));
    let result = prevNum * newNum;
    allNums.push(result);
    finalResult = allNums.reduce((a, b) => a + b, 0);
  } else if (expression === "divide") {
    let newNum = Number(baseNum.join(""));
    let result = prevNum / newNum;
    allNums.push(result);
    finalResult = allNums.reduce((a, b) => a + b, 0);
  }
  mainNumChild.textContent = finalResult;
  baseNum = [];
};
