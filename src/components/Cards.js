import React from 'react';

export default function Cards({ characters }) {
  return (
    <div>
      {characters.results.map((item) => (
        <p key={item.id}>
          <span>Name: {item.name}</span>
          <img src={item.image}></img>
        </p>
      ))}
    </div>
  );
}
