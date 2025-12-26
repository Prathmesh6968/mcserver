import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";

export default function Anime() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    api(`anime_data?id=eq.${id}`).then(d => setAnime(d[0]));
  }, []);

  if (!anime) return null;

  return (
    <div className="container">
      <h1>{anime.title}</h1>
      <img src={anime.banner} width="100%" />
      <p><b>Score:</b> {anime.score}</p>
      <p><b>Genres:</b> {anime.genres}</p>
      <Link to={`/watch/${id}?season=1&ep=1`}>
        <button>Watch Now</button>
      </Link>
    </div>
  );
}
