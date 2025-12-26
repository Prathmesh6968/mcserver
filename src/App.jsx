import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Watch from "./pages/Watch";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/:id" element={<Anime />} />
      <Route path="/watch/:id" element={<Watch />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
