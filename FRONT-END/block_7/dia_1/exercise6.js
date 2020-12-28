const skills = ['Javascript', 'HTML', 'CSS', 'React', 'PHP'];

const funcao = (str) => {
  let frase1 = 'Tryber x aqui!';
  const novaFrase = frase1.replace('x', str);

  return novaFrase;
};

const funcao2 = (str) => {
  const ordenaSkills = skills.sort();
  let novaStr = `${str} Minhas cinco principais habilidades são`;

  const novaFrase = ordenaSkills.forEach((skill, index, array) => {
    if (index === array.length - 1) {
      novaStr = `${novaStr} e ${skill}.`;
    } else {
      novaStr = `${novaStr}, ${skill}`;
    }
    if (index === 0) {
      novaStr = `${novaStr}: ${skill}`;
    }
  });

  return novaStr;
};

console.log(funcao2(funcao('bebeto')));
