let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = [];

for(let i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 2 != 0){
        odd.push(numbers[i]);
    }
}

if(odd.length != 0){
    console.log(odd)
} else {
    console.log('Nenhum valor ímpar encontrado!');
}