const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função
//  deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave
//  que deverá ser adicionada e o valor dela.

const funcao1 = (obj, key, value) => {
  return (obj[key] = value);
};

funcao1(lesson1, 'turno', 'manhã');

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve
// receber um objeto como parâmetro.

const funcao2 = (obj) => {
  return Object.keys(obj);
};

funcao2(lesson1);

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const funcao3 = (obj) => {
  return Object.keys(obj).length;
};

funcao3(lesson2);

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve
// receber um objeto como parâmetro.

const funcao4 = (obj) => {
  return Object.values(obj);
};

funcao4(lesson3);

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através
//  do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas
//   chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando
//   console.log(allLessons) , a saída deverá ser a seguinte:
/* {
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número
//  total de estudantes em todas as aulas.

const funcao6 = (obj) => {
  const lesson1 = obj.lesson1.numeroEstudantes;
  const lesson2 = obj.lesson2.numeroEstudantes;
  const lesson3 = obj.lesson3.numeroEstudantes;
  const total = lesson1 + lesson2 + lesson3;

  return total;
};

funcao6(allLessons);

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição
// no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const funcao7 = (obj, index) => {
  return Object.values(obj)[index];
};

funcao7(lesson1);

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função.
//  Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da
//   chave e o valor da chave. Exemplo:
//   console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false

const funcao8 = (obj, key, value) => {
  const something = Object.entries(obj);

  const result = false;
  return something.some((item) =>
    item[0] === key && item[1] === value ? true : false
  );
};

funcao8(lesson3, 'turno', 'noite');
