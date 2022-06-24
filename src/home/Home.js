import React from "react";
import Favourite from "../favourite/Favourite";
import Playlist from "../playlist/Playlist";
export default function Home() {
  return (
    <div className="justify-content-center ">
      <div>
        <h1>Playlist</h1>
        <Playlist />
      </div>
      <div>
        <h1>Favourite</h1>
        <Favourite />
      </div>
    </div>
  );
}
