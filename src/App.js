import React, { useReducer, useState } from "react";
import SearchBar from "./Search/SearchBar";
import Nav from "./nav/Nav";
import { Routes, Route } from "react-router-dom";
import Playlist from "./playlist/Playlist";
import Favourite from "./favourite/Favourite";
import Context from "./Context";
import Home from "./home/Home";
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
    <>
      <h1 className="display 1">PLAYLIST CREATOR</h1>
      <div className="container-fluid min-vh-100 d-flex flex-row">
        <div>
          <Nav />
        </div>
        <div className="w-100 flex-grow-1">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Search" element={<SearchBar />} />

              <Route path="/playlist" element={<Playlist />} />
              <Route path="/favourite" element={<Favourite />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
