// Exercise 3:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

sum = sum / numbers.length;

console.log(sum);

// Exercise 4:

if(sum > 20){
  console.log("Valor final maior que 20");
} else {
  console.log("Valor final menor que 20");
}
