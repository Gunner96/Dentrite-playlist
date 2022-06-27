import React, { useReducer, useState } from "react";
import SearchBar from "./Search/SearchBar";
import Nav from "./nav/Nav";
import { Routes, Route } from "react-router-dom";
import Playlist from "./playlist/Playlist";
import Favourite from "./favourite/Favourite";
import Home from "./home/Home";
import Header from "./image/Header";
import "./color.css";
function App() {
  // const [play, updateplay] = useState([]);
  // const items = [];
  // localStorage.setItem("playlist", JSON.stringify(items));
  // localStorage.clear("playlist");
  // const ret = JSON.parse(localStorage.getItem("playlist"));
  // if (ret) {
  //   console.log("present");
  // } else {
  //   console.log("not found");
  // }

  //
  return (
    <div className="">
      <Header />
      <div className="row expand-width fill">
        <div className="col-2 nav-bg">
          <Nav />
        </div>
        <div className="col container-fluid p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Search" element={<SearchBar />} />

            <Route path="/playlist" element={<Playlist />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
