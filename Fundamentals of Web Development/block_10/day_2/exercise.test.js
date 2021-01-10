const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};



it('A palavra "show" deve retornar "SHOW".', () => {
  uppercase('show', (str) => {
    expect(str).toBe("SHOW");
  })
});

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

it('Testa a função "getUserName" quando da "bom".', async () => {
  expect.assertions(1);
  const result = await getUserName(4);
  expect(result).toBe('Mark');
});

it('Testa a função "getUserName" quando da "ruim".', async () => {
  expect.assertions(1);
  try {
    await getUserName(2);
  } catch(error) {
    expect(error).toEqual({error: 'User with 2 not found.'});
  }
});

// const fetch = require('node-fetch');

// const getRepos = (url) => {
//   return fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//       return data.map((rep) => rep.name)
//     });
// };


///////////////////////////

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise ((resolve, reject) => {
    setTimeout(() => {
      const findAnimal = Animals.find(animal => name === animal.name);
      (findAnimal) ? resolve(findAnimal) : reject('Nenhum animal com esse nome!');
    }, 300);
  })
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(result => result);
}




// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});


const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalByAge = Animals.find(animal => age === animal.age);
      (animalByAge) ? resolve(animalByAge) : reject('Nenhum animal com essa idade foi encontrado!');
    }, 300);
  }));

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then(result => result);
};


describe('Testando busca por IDADE.', () => {
  it('Quando existe o animal.', () => {
    expect.assertions(1);
    return getAnimalByAge(2).then((result) => {
      expect(result).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
    });
  });

  it('Quando não existe o animal.', () => {
    expect.assertions(1);
    return getAnimalByAge(77).catch((error) => {
      expect(error).toEqual('Nenhum animal com essa idade foi encontrado!');
    })
  });
});
