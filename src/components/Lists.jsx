import React from "react";

import "./Lists.css";

export default function Lists({ item }) {
  return (
    <section id="lists">
      <h2>{item.title}</h2>

      <div className="listarea">
        <div className="list">
          {item.items.results.length > 0 &&
            item.items.results.map((item) => (
              <div className="list-item" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
