let number = 5;
let ast = '';

for(let i = 0; i<number; i +=1){
   for(let x = 0; x < number; x += 1){
       if(x >= number - i - 1){
           ast += '*';
       } else {
           ast += ' ';
       }
   }
   console.log(ast);
   ast = '';
}