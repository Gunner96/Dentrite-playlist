import React, { useContext } from "react";
import { PlaylistProvider } from "../Context";
export default function Cardplaylist({
  playlist,
  updatePlaylist,
  changeCurrentPlaylist,
}) {
  const { value } = useContext(PlaylistProvider);
  const [state, dispatch] = value;
  // const [playlist, updateDisplay] = useState(playlist);
  function deletePlaylist(playname) {
    dispatch({ type: "DELPLAY", play: playname });
    localStorage.removeItem(playname);
    updatePlaylist(Object.keys(localStorage));
  }

  const userPlaylist = playlist
    ? playlist.map((val, idx) => {
        const count = JSON.parse(localStorage.getItem(val)).length;
        return (
          <div
            onClick={() => changeCurrentPlaylist(val)}
            key={idx}
            className="card mx-2 btn"
            style={{
              width: "18rem",
              backgroundColor: "#54BAB9",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{val}</h5>
              <h6
                className="card-subtitle mb-2 text-muted"
                style={{ color: "white" }}
              >
                {count ? "Number of tracks: " + count : "The playlist is empty"}
              </h6>
              <p className="card-text" style={{ color: "white" }}>
                Click to load playlist
              </p>
              <button
                onClick={() => {
                  deletePlaylist(val);
                }}
                type="button"
                className="btn"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })
    : null;
  console.log("load");
  return <>{userPlaylist ? userPlaylist : "no playlist"}</>;
}
