import { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokemon';
import Cards from '../components/Cards';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(page, query);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, page, query]);

  return (
    <div className="App">
      <img src="pokeball.png" alt="pokeball"></img>
      <h1>Pokedex</h1>
      {loading && <span className="loader">loading</span>}
      {!loading && (
        <>
          <Cards
            pokemon={pokemon}
            page={page}
            setPage={setPage}
            setLoading={setLoading}
            query={query}
            setQuery={setQuery}
          />
        </>
      )}
    </div>
  );
}
