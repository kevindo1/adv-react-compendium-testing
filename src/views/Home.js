import React, { useState, useEffect } from 'react';
import { getNBA } from '../services/nba';
import Cards from '../components/Cards';
import Controls from '../components/Controls';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNBA();
      setCharacters(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls />
          <Cards characters={characters} />
        </>
      )}
    </div>
  );
}
