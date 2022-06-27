import React, { useContext, useRef } from "react";
import "./popup.css";
import { Link } from "react-router-dom";
import { PlaylistProvider } from "../Context";

export default function Popup({ trigger, triggerVal, track }) {
  const { value } = useContext(PlaylistProvider);
  const [state, dispatch] = value;
  const trackRef = useRef();
  const playlist = Object.keys(localStorage).map((val, idx) => {
    return (
      <option key={idx} value={val}>
        {val}
      </option>
    );
  });
  function addtoplaylist() {
    track = { ...track, favourite: false };
    console.log("ind val", track);
    console.log("playlist", trackRef.current.value);
    dispatch({ type: "ADD", value: track, play: trackRef.current.value });
    trigger(false);
  }
  const present = (
    <div className="form-group justify-content-center">
      <h5>SELECT PLAYLIST</h5>

      <select ref={trackRef} className="input form-control" required>
        <option key={-1} value="">
          NULL
        </option>
        {playlist}
      </select>
      <button
        type="button"
        onClick={() => {
          addtoplaylist();
        }}
        className="btn btn-primary mt-2"
      >
        Add to playlist
      </button>
      <button
        type="button"
        onClick={() => trigger(false)}
        className="btn btn-danger mt-2 mx-3"
      >
        Cancel
      </button>
    </div>
  );
  const notPresent = (
    <div>
      <h5>Playlist unavailable</h5>
      <Link to="/playlist" className="nav-link btn" href="#">
        Click to create playlist
      </Link>
    </div>
  );

  return triggerVal ? (
    <div className="outer">
      <div class="modal-body inner">
        {playlist && playlist.length > 0 ? present : notPresent}
        <hr />
      </div>
    </div>
  ) : (
    ""
  );
}
