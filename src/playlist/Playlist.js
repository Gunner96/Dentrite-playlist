import React, { useContext } from "react";
import { PlaylistProvider } from "../Context";
import { Link } from "react-router-dom";

export default function Playlist() {
  const { value } = useContext(PlaylistProvider);
  const [state, dispatch] = value;
  const fail = <Link to="/Search">Search and create playlist</Link>;

  function addtofavourite(val) {
    dispatch({ type: "STAR", value: val });
  }
  function trackdelete(val) {
    dispatch({ type: "DELETE", value: val });
  }

  const allresult = state
    ? state.map((value) => {
        return (
          // <div key={value.id} style={{ border: "solid 5px", margin: "10px" }}>
          <div
            key={value.id}
            className="card m-2 p-0 .bg-light.bg-gradient"
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
              <div className="col row-cols-1 justify-content-first">
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    addtofavourite(value);
                  }}
                >
                  {value.favourite ? (
                    <i
                      className="bi bi-star-fill"
                      style={{ color: "yellow" }}
                    ></i>
                  ) : (
                    <i className="bi bi-star"></i>
                  )}
                  {/* {value.favourite ? "Remove from favourite" : "add to favourite"} */}
                </button>
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

  console.log("player", state);

  return (
    <div className="row row-cols-1 row-cols-md-1 g-4 justify-content-first mt-2">
      {allresult.length > 0 ? allresult : fail}
    </div>
  );
}
