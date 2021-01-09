let number = 5;
let ast = '';
for(let i = 0; i<number; i +=1){
    for(let j = 0; j < number; j += 1){
        ast += '*'
    }
    console.log(ast);
    ast = '';
}