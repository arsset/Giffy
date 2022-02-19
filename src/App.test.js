import { render, screen } from '@testing-library/react';
import App from './App';

test('render withour crashing', async() => {
  render(<App />);
  const linkElement = await screen.findByText(/Última búsqueda/i);
  expect(linkElement).toBeInTheDocument();
});
