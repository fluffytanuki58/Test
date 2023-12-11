import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import Lounge from "./pages/Lounge";
import Directions from "./pages/Directions";
import ElixirPage from "./pages/Elixir";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Lounge />}></Route>
        <Route exact path="/about/directions" element={<Directions />}></Route>
        <Route exact path="/beverages/elixir" element={<ElixirPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
