import React from 'react';
import renderWithRouter from './helper/renderWithRouter';
import App, { About } from './App';
import userEvent from '@testing-library/user-event';

describe('Teste a aplicação toda.', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });
  
  it('deve renderizar o componente Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const sobre = getByText(/sobre/i);
    userEvent.click(sobre);
    const pathname = history.location.pathname; // mostra qual URL está
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe/'); // digita o texto na URL
    const noMatch = getByText(/Página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
});
