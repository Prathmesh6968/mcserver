import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api";

export default function Watch() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const season = params.get("season") || 1;
  const [eps, setEps] = useState([]);
  const [cur, setCur] = useState(1);

  useEffect(() => {
    api(`episodes_data?anime_id=eq.${id}&season=eq.${season}&order=episode.asc`)
      .then(setEps);
  }, []);

  const ep = eps.find(e => e.episode == cur);

  if (!ep) return null;

  return (
    <div className="container">
      <div className="player">
        <iframe src={ep.iframe} allowFullScreen />
      </div>

      <div className="controls">
        <button onClick={() => setCur(cur - 1)}>Prev</button>
        <select onChange={e => setCur(+e.target.value)} value={cur}>
          {eps.map(e => (
            <option key={e.episode} value={e.episode}>
              EP {e.episode}
            </option>
          ))}
        </select>
        <button onClick={() => setCur(cur + 1)}>Next</button>
      </div>
    </div>
  );
}
