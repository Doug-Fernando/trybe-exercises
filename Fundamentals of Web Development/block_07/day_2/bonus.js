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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const funcao1 = (obj) => {
  let result = 0;
  const lessons = Object.values(obj);
  lessons.forEach((item) => {
    if (item.materia === 'Matemática') {
      result += item.numeroEstudantes;
    }
  });
  return result;
};

funcao1(allLessons);

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório
//  do professor ou professora, as aulas que ele ou ela ministrou e o número total
//   de estudantes. Use o objeto criado no exercício 5:
// console.log(createReport(allLessons, 'Maria Clara'))
// /* {
//   professor: 'Maria Clara',
//   aulas: [ 'Matemática', 'Matemática' ],
//   estudantes: 30
// } */

const funcao2 = (obj, prof) => {
  const objeto = Object.values(obj);
  let totalEstudantes = 0;
  const materias = [];
  const newProf = objeto.forEach((item) => {
    if (item.professor === prof) {
      materias.push(item.materia);
      totalEstudantes += item.numeroEstudantes;
    }
  });

  const relatorio = { professor: prof, materias, totalEstudantes };

  return relatorio;
};

console.log(funcao2(allLessons, 'Maria Clara'));
