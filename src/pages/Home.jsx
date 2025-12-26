import { useEffect, useState } from "react";
import { api } from "../api";
import AnimeCard from "../components/AnimeCard";

export default function Home() {
  const [list, setList] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    api("anime_data?order=title.asc").then(setList);
  }, []);

  return (
    <>
      <header>
        Anime Streaming
        <input placeholder="Search..." onChange={e => setQ(e.target.value)} />
      </header>

      <div className="grid">
        {list
          .filter(a => a.title.toLowerCase().includes(q.toLowerCase()))
          .map(a => <AnimeCard key={a.id} anime={a} />)}
      </div>
    </>
  );
}
