const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

const randomNumber = new Promise((res, rej) => {
    const array = [];
    for(let x = 0; x <= 10; x += 1) {
      array.push(Math.round(Math.random() * 51) ** 2);
    }
    const result = array.reduce((acc,curr) => {
      return acc + curr;
    });

    if(result >= 8000) {
      return rej(console.log('É mais de oito mil!'));
    }

    const divNumber = [2, 3, 5, 10];
    const division = [];
    divNumber.forEach((number) => {
      return division.push(number / result);
    });

    res(console.log(division));
    

  });

randomNumber.then((result) => result)
  .then(array => array.reduce((number, acc) => number + acc, 0))
  .catch(error => error);

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject)
  .then(response => response.json())
  .then((data) => {
    const joke = document.querySelector('#jokeContainer');
    joke.innerText = data.joke;
  });

  console.log('                      ');


//////////////////////////////


const arrayWithRandomNumbers = () => {
  const numbers = Array.from({length:10}, () => Math.round(Math.random() * 51));
  const powNumbers = numbers.map(number => number ** 2);
  const sumNumbers = powNumbers.reduce((acc, curr) => acc + curr);
  
  if(sumNumbers > 8000) throw new Error('É mais de oito mil!');

  return sumNumbers;
};

const numbersForDiv = [2, 3, 5, 10];

const arrayDiv = (sumNumbers) => {
  return numbersForDiv.map(number => sumNumbers * number);
};


const usingAll = async () => {
  try {
    const sumResult = await arrayWithRandomNumbers();
    const arrayDivResult = await arrayDiv(sumResult);
    console.log(arrayDivResult);
  } catch(error) {
    console.log(error.message)
  }
};


usingAll();







window.onload = () => fetchJoke();
