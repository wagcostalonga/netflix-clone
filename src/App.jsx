import React, { useEffect, useState } from "react";

import Tmdb from "./services/Tmdb";
import Lists from "./components/Lists";
import Header from "./components/Header";

import "./App.css";

export default function App() {
  const [movieLists, setMovieLists] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    async function loadData() {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieLists(list);

      // Pegando aleatoriamente o featured (um filme para a capa)
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

      setFeaturedData(chosenInfo);
    }
    loadData();
  }, []);

  return (
    <main>
      {featuredData && <Header item={featuredData} />}
      <div className="list-container">
        {movieLists.map((item, key) => (
          <Lists key={key} item={item} />
        ))}
      </div>
    </main>
  );
}
