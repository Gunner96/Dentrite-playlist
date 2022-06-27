import React, { useState, useRef } from "react";
import Cardplaylist from "./Cardplaylist";

export default function Localstorage({ changeCurrentPlaylist }) {
  const [playname, create] = useState("");
  const [playlist, updatePlaylist] = useState(Object.keys(localStorage));
  const [reveal, changeReveal] = useState(false);
  const inputRef = useRef("");

  function createPlaylist() {
    const newName = inputRef.current.value;
    console.log("from create");
    !playlist.includes(newName)
      ? localStorage.setItem(newName, JSON.stringify([]))
      : console.log("already present");
    updatePlaylist(Object.keys(localStorage));
    changeReveal(false);
  }

  const inputplay = (
    <div key={-1} className="card mx-2 " style={{ width: "18rem" }}>
      <div className="card-body">
        <input
          ref={inputRef}
          // onChange={(e) => {
          //   updateSearch(e.target.value);
          // }}
          // value={playname}
          type="text"
          className="form-control"
          placeholder="Playlist name"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
        <button
          type="button"
          className="card-title btn btn-light mt-2"
          onClick={createPlaylist}
        >
          CREATE PLAYLIST
        </button>
      </div>
    </div>
  );

  const cover = (
    <div
      key={-1}
      className="card mx-2 btn"
      style={{ width: "18rem" }}
      onClick={() => {
        changeReveal(true);
      }}
    >
      <div className="card-body">
        <h5 className="card-title">CREATE PLAYLIST</h5>
        <p className="card-text">
          Create playlist and add your favourite tunes
        </p>
      </div>
    </div>
  );
  console.log("load from local");
  return (
    <div className="row row-cols-1 row-cols-md-1 g-4">
      {reveal ? inputplay : cover}
      <Cardplaylist
        changeCurrentPlaylist={changeCurrentPlaylist}
        playlist={playlist}
        updatePlaylist={updatePlaylist}
      />
    </div>
  );
}
