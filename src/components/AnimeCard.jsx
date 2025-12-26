import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
  return (
    <Link to={`/anime/${anime.id}`}>
      <div className="card">
        <img src={anime.banner} />
        <div className="info">{anime.title}</div>
      </div>
    </Link>
  );
}
