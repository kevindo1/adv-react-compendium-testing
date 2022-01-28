import React from 'react';
import './Cards.css';

export default function Cards({ pokemon, setLoading, query, setQuery }) {
  return (
    <>
      <form>
        <input
          id="filled-basic"
          type="textbox"
          name="name"
          placeholder="Search Name"
          label="Search Name"
          variant="filled"
          value={query}
          onInput={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
      </form>
      <button className="search-button" onClick={() => setLoading(true)}>
        Search
      </button>
      <div>
        <ul>
          {pokemon.map((item) => (
            <div key={item.id}>
              <li>{item.pokemon}</li>
              <img src={item.url_image}></img>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
