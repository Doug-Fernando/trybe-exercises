const longestWordWord = (word) => {
  const splitWord = word.split(' ');

  return splitWord.reduce((acc, curr) =>
    curr.length > acc.length ? curr : acc
  );
};

console.log(longestWordWord('Não sei o que aconteceu'));
