import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PlaylistProvider } from "../Context";

export default function Display({ currentPlaylist }) {
  const { value } = useContext(PlaylistProvider);
  const [state, dispatch] = value;
  // const current = JSON.parse(localStorage.getItem(currentPlaylist));
  const current = currentPlaylist && state[currentPlaylist];
  const empty = (
    <div>
      <h5>Playlist is empty</h5>
      <Link to="/Search">Add tracks from here</Link>
    </div>
  );

  // const fail = <Link to="/Search">Search and create playlist</Link>;

  function addtofavourite(val) {
    dispatch({ type: "STAR", value: val, play: currentPlaylist });
  }
  function trackdelete(val) {
    dispatch({ type: "DELETE", value: val, play: currentPlaylist });
  }

  const allresult =
    current && current.length > 0
      ? current.map((value) => {
          return (
            <div
              key={value.id}
              className="card m-2 p-0 .bg-light .bg-gradient track-bg"
              style={{ width: "18rem" }}
            >
              <img
                src={value.album.cover_medium}
                className="card-img-top"
                width={"100%"}
                alt="..."
              />
              <div className="card-body">
                <p>{value.title}</p>
                <p>{value.artist.name}</p>
                <div className="col row-cols-1 justify-content-center">
                  <p style={{ textAlign: "center", fontSize: "20px" }}>
                    <i
                      className="bi bi-star-fill bi-lg"
                      onClick={() => {
                        addtofavourite(value);
                      }}
                      style={
                        value.favourite
                          ? { color: "#FF5B00" }
                          : { color: "grey" }
                      }
                    ></i>
                  </p>
                  {/* {value.favourite ? "Remove from favourite" : "add to favourite"} */}
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => {
                      trackdelete(value);
                    }}
                  >
                    Delete Track
                  </button>
                </div>
              </div>
            </div>
          );
        })
      : [];

  return <>{currentPlaylist && allresult.length > 0 ? allresult : empty}</>;
}
