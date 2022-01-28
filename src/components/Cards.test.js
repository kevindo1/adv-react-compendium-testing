import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../views/Home';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const jolteon = {
  count: 1,
  page: 1,
  perPage: 20,
  sort: {
    by: '_id',
    direction: 'asc',
  },
  search: {
    pokemon: 'jolteon',
  },
  results: [
    {
      _id: '5ff4fb7cd89993a89cc654ec',
      pokemon: 'jolteon',
      id: 147,
      species_id: 135,
      height: 8,
      weight: 245,
      base_experience: 184,
      type_1: 'electric',
      type_2: 'NA',
      attack: 65,
      defense: 60,
      hp: 65,
      special_attack: 110,
      special_defense: 95,
      speed: 130,
      ability_1: 'volt-absorb',
      ability_2: 'NA',
      ability_hidden: 'quick-feet',
      color_1: '#F8D030',
      color_2: 'NA',
      color_f: 'NA',
      egg_group_1: 'ground',
      egg_group_2: 'NA',
      url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png',
      generation_id: 1,
      evolves_from_species_id: '133',
      evolution_chain_id: 67,
      shape_id: 8,
      shape: 'quadruped',
      pokebase: 'jolteon',
      pokedex: 'http://www.pokemon.com/us/pokedex/jolteon',
    },
  ],
};

const server = setupServer(
  rest.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex`, (req, res, ctx) => {
    return res(ctx.json(jolteon));
  })
);

// 🚨 Listen for server start
beforeAll(() => server.listen());

// 🚨 Close server when complete
afterAll(() => server.close());

test('Should be able to search jolteon', async () => {
  server.use(
    rest.get('https://pokedex-alchemy.herokuapp.com/api/pokedex', (req, res, ctx) => {
      return res(ctx.json(jolteon));
    })
  );
  render(<Home />);

  //grab all the consts for the search bar
  const searchBar = await screen.findByRole('textbox');
  const pokemonName = 'jolteon';
  const button = screen.getByRole('button');

  // what the user will actually do, in the search bar, search a name
  userEvent.type(searchBar, pokemonName);
  userEvent.click(button);

  // the results that user gets back
  const pokemon = await screen.findAllByText(pokemonName, { exact: false });

  const result = pokemon.map((item) => item.textContent);

  const handleNameCheck = (name) => name.toLowerCase().includes(pokemonName);

  const hasSameName = result.every(handleNameCheck);
  expect(hasSameName).toBe(true);
});
