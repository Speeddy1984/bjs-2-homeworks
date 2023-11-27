"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b**2 - 4*a*c;
  
  if (discr < 0) {
    arr = [];
  } else if (discr === 0) {
      arr.push(-b/(2*a));
    } else {
      arr.push((-b + Math.sqrt(discr)) / (2*a));
      arr.push((-b - Math.sqrt(discr)) / (2*a));
      }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentPerMonth = percent / 100 / 12;
  let creditAmount = amount - contribution;
  let monthlyPayment = creditAmount * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth)**countMonths) - 1)));
  let totalAmount = Number((monthlyPayment * countMonths).toFixed(2));
  return totalAmount;
}

solveEquation(1, 2, 3);
calculateTotalMortgage(10, 0, 50000, 12);