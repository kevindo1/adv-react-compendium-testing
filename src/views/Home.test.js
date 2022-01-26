import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('Should be able to search Pokemon', async () => {
  render(<Home />);

  //grab all the consts for the search bar, button
  const searchBar = await screen.findByRole('textbox');
  const searchButton = screen.getByRole('button');
  const pokemonName = 'magikarp';

  // what the user will actually do, in the search bar, search a name
  userEvent.type(searchBar, pokemonName);
  userEvent.click(searchButton);

  // the results that user gets back
  const pokemon = await screen.findAllByText(pokemonName, { exact: false });

  const result = pokemon.map((item) => item.textContent);

  const handleNameCheck = (name) => name.toLowerCase().includes(pokemonName);

  const hasSameName = result.every(handleNameCheck);
  expect(hasSameName).toBe(true);
});
