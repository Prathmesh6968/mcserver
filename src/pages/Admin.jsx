import { useState } from "react";
import { api } from "../api";

export default function Admin() {
  const [id, setId] = useState("");

  async function check() {
    const d = await api(`anime_data?id=eq.${id}`);
    alert(d.length ? "Anime Found: " + d[0].title : "Invalid anime_id");
  }

  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <input onChange={e => setId(e.target.value)} placeholder="anime_id" />
      <button onClick={check}>Verify</button>
    </div>
  );
}
