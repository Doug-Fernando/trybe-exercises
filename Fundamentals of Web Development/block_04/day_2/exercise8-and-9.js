// Exercise 8:
let array = [];

for(let i = 1; i <= 25; i += 1){
    array.push(i)
}

console.log(array);


// Exercise 9:

let div = [];

for(let x = 0; x < array.length; x += 1){
    div.push(array[x] / 2);
}

console.log(`Resultado dos numeros do exercicio 8 dividos por 2: ${div}`);