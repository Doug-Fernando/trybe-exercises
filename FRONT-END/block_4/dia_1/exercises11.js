let salary = 3000;
let inss;
let ir;
let sub;
let discount;

if (salary <= 1556.94) {
  inss = 8;
} else if (salary > 1556.95 && salary <= 2594.92) {
  inss = 9;
} else if (salary > 2594.93 && salary <= 5189.82) {
  inss = 11;
} else if (salary > 5189.82) {
  inss = 570.88;
}

if (salary >= 5189.82) {
  discount = 570.88;
} else {
  discount = salary * (inss / 100);
}
salary = salary - discount;

if (salary <= 1903.98) {
  ir = 0;
  sub = 0;
} else if (salary > 1903.98 && salary <= 2826.65) {
  ir = 7.5;
  sub = 142.8;
} else if (salary >= 2826.66 && salary <= 3751.05) {
  ir = 15;
  sub = 354.8;
} else if (salary >= 3751.06 && salary <= 4664.68) {
  ir = 22.5;
  sub = 636.13;
} else if (salary >= 4664.68) {
  ir = 27.5;
  sub = 869.36;
}

let discountIr = salary * (ir / 100) - sub;
let salaryL = salary - discountIr.toFixed(2);

console.log(salaryL);
