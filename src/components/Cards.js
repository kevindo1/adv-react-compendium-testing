import React from 'react';
import './Cards.css';

export default function Cards({ pokemon, setLoading, setPage, query, setQuery }) {
  const handleClick = () => {
    setLoading(true);
    setPage((prevState) => ++prevState);
  };
  return (
    <>
      <input
        id="filled-basic"
        type="textbox"
        placeholder="Search Name"
        label="Search Name"
        variant="filled"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
      <button className="search-button" onClick={() => setLoading(true)}>
        Search
      </button>
      <div>
        {pokemon.slice(0, 10).map((item) => (
          <p key={item.id}>
            <span>{item.pokemon}</span>
            <img src={item.url_image}></img>
          </p>
        ))}
        <button onClick={handleClick}>Next Page</button>
      </div>
    </>
  );
}
