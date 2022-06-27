import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Localstorage from "../localstorage/Localstorage";
import Display from "./Display";

export default function Playlist() {
  const [currentPlaylist, changeCurrentPlaylist] = useState(null);
  const checkList = Object.keys(localStorage);
  // const fail = <Link to="/Search">Search and create playlist</Link>;

  // function addtofavourite(val) {
  //   dispatch({ type: "STAR", value: val });
  // }
  // function trackdelete(val) {
  //   dispatch({ type: "DELETE", value: val });
  // }

  // console.log("player", state);

  return (
    <div className="row row-cols-1 row-cols-md-1 g-4 justify-content-first mt-2 overflow">
      <div>
        <h3>PLAYLIST</h3>
        <hr />
        <Localstorage changeCurrentPlaylist={changeCurrentPlaylist} />
      </div>
      <h3>TRACKS</h3>
      <hr />
      {/* {console.log("current", currentPlaylist)} */}
      {checkList && currentPlaylist == null && (
        <div className="">
          <h5>Select a playlist from above</h5>
        </div>
      )}
      {currentPlaylist && <Display currentPlaylist={currentPlaylist} />}
    </div>
  );
}
