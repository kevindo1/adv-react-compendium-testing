import { screen, render } from '@testing-library/react';
import Home from './Home';

test('Should render Pokemon page views', async () => {
  render(<Home />);

  const pokemonList = await screen.findAllByRole('listitem');
  expect(pokemonList).toHaveLength(20);

  const search = screen.getByRole('textbox');
  expect(search).toBeInTheDocument();

  const logo = screen.getByRole('img', { name: /pokeball/i });
  expect(logo).toBeInTheDocument();

  const header = screen.getByRole('heading', { name: /pokedex/i });
  expect(header).toBeInTheDocument();

  const searchButton = screen.getByRole('button', { name: /search/i });
  expect(searchButton).toBeInTheDocument();
});
