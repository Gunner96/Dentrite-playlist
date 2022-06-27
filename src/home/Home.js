import React from "react";
import Favourite from "../favourite/Favourite";
import Playlisthome from "./Playlisthome";
export default function Home() {
  return (
    <div className="justify-content-center ">
      <div>
        <h3>CURRENT PLAYLIST</h3>
        <hr />

        <div className="row row-cols-1 row-cols-md-1 g-4">
          <Playlisthome />
        </div>
      </div>
      <div>
        <Favourite />
      </div>
    </div>
  );
}
