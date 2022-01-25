import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import Home from './Home';

test('Should render Pokemon page views', async () => {
  render(<Home />);

  const search = await screen.findByRole('textbox');
  expect(search).toBeInTheDocument;

  const img = screen.getByRole('img', { name: /pokeball/i });
  expect(img).toBeInTheDocument;

  const header = screen.getByRole('heading', { name: /pokedex/i });
  expect(header).toBeInTheDocument;

  const searchButton = screen.findByRole('button', { name: /search/i });
  expect(searchButton).toBeInTheDocument;

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
});
