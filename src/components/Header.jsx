import "./Header.css";

export default function Header({ item }) {
  console.log(item);

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <header
      id="header"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="vertical">
        <div className="horizontal">
          <div className="title">{item.original_name}</div>
          <div className="info">
            <div className="info-points">{item.vote_average} pontos</div>
            <div className="info-year">{firstDate.getFullYear()}</div>
            <div className="info-seasons">
              {item.number_of_seasons}{" "}
              {item.number_of_seasons !== 1 ? "temporadas" : "temporada"}
            </div>
            <div className="info-description">{item.overview}</div>
            <div className="info-buttons">
              <a href={`/watch/${item.id}`} className="btn-watch">► Assistir</a>
              <a href={`/list/add/${item.id}`} className="btn-add-list">+ Minha Lista</a>
            </div>
            <div className="info-genres">
              <strong>Gêneros: </strong>
              {genres.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
