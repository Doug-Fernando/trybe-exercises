const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

test('array and object equality', () => {
  const arr = [1, 2, 3];
  const obj = { a: 1, b: 2, c: 3 };

  // expect(arr).toBe([1, 2, 3]); // fails
  // expect(obj).toBe({ a: 1, b: 2, c: 3 }); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3 }); // OK
});

const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido');
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => {
    multiplyByTwo();
  }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => {
    multiplyByTwo();
  }).toThrowError(new Error('number é indefinido'));
});

const workdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workdays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workdays).not.toContain('Sunday');
});
