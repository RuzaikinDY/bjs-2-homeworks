"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c; //формула рассчет дискриминанта
  
  if (discriminant > 0) {
    let meaning1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let meaning2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(meaning1,meaning2)
  }
  else if (discriminant === 0){
    let meaning1 = -b / (2 * a);
    arr.push(meaning1);
  }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
