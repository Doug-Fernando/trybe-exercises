// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, word) => {
    return (
      acc +
      word
        .split('')
        .reduce(
          (accumulator, letter) =>
            letter === 'a' || letter === 'A' ? accumulator + 1 : accumulator,
          0
        )
    );
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);
