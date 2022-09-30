"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  
  if (discriminant > 0) {
    let meaning1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let meaning2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(meaning1,meaning2)
  }
  else if (discriminant === 0){
    let meaning1 = -b / (2 * a);
    arr.push(meaning1);
  }
  return arr; // array
}

// function calculateTotalMortgage(percent, contribution, amount, date) {
//   debugger;
//   const totalAmount = 0;
//   const interestRate = percent / 12 / 100; //Процентная ставка. или /100/12
//   const downPayment = contribution; //Сумма первоначального взноса.
//   const loanАmount = amount; //Сумма кредита.


//   if (interestRate < 0) {
//     return `Параметр "Процентная ставка" содержит неправильное значение  ${percent}`;
//   }
//   else if (downPayment < 0) {
//     return `Параметр начальный взнос содержит неправильное значение ${contribution}`;
//   }
//   else if (loanАmount < 0) {
//     return `Параметр общая стоимость содержит неправильное значение ${amount}`;
//   }
//   else {
//     const timeOfConclusion = new Date();
//     const tern = date.getMonth() - timeOfConclusion.getMonth() + (12 * (date.getFullYear() - timeOfConclusion.getFullYear()));//Срок на который был выдан кредит(месяцах).
//     //Метод getMonth Получить месяц, от 0 до 11.
//     //Метод getFullYear Получить год (4 цифры).
//     const loanBody = loanАmount - downPayment; //Тело кредита.
//     const payment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** tern) - 1))); //Ежемесячная оплата.
//     const totalSum = (payment * tern).toFixed(2);//Общая сумма, которую придется заплатить клиенту.
//     const totalAmount = Number(totalSum);
//     console.log("Общая сумма " + totalAmount);
//     return totalAmount;
//   }
