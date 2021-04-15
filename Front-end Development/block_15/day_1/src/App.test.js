import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

// test('Verificando se existe UM botão', () => {
//   const { getByRole } = render(<App />);
//   const btn = getByRole('button'); // funciona somente com 1 elemento da ROLE
//   expect(btn).toBeInTheDocument();
// });

test('Verificando se existe um botão de enviar', () => {
  // Resolvendo o erro do teste acima
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send'); // busca pelo data-testid
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar');
});

test('Verificando se existe dois botões', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button'); // funciona para varios elementos da mesma ROLE
  expect(buttons.length).toBe(2);
});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
