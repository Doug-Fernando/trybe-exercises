let number = 7;
let ast = '';
let spaceLeft = (number + 1) / 2;
let spaceRight = (number + 1) / 2;

for(let i = 0; i < (number + 1) / 2; i +=1){
    ast = '';
   for(let x = 1; x <= number; x += 1){
       if(x < spaceLeft || x > spaceRight){
           ast += ' ';
       } else {
           ast += '*';
       }       
   }
   spaceLeft -= 1;
   spaceRight += 1;
   console.log(ast);
}