export async function getPokemon(page, query) {
  const params = new URLSearchParams();
  params.set('page', page);
  params.set('pokemon', query);

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await response.json();

  return data;
}
