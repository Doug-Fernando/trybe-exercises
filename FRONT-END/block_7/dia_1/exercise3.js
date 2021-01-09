const funcao = (num) => {
  let result = 1;

  for (let mult = 2; mult <= num; mult += 1) {
    result *= mult;
  }

  return result;
};

console.log(funcao(5));

///////////////////////// recursiva

const funcao = (num) => (num > 1 ? num * funcao(num - 1) : 1);

console.log(funcao(4));
