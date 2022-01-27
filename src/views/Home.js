import { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokemon';
import Cards from '../components/Cards';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  if (loading) {
    <h2>loading</h2>;
  }

  return (
    <div className="App">
      <img src="pokeball.png" alt="pokeball"></img>
      <h1>Pokedex</h1>
      <>
        <Cards pokemon={pokemon} setLoading={setLoading} query={query} setQuery={setQuery} />
      </>
    </div>
  );
}
