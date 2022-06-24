import React, { useContext } from "react";
import { PlaylistProvider } from "../Context";
import { Link } from "react-router-dom";
export default function Favourite() {
  const { value } = useContext(PlaylistProvider);
  const [state, dispatch] = value;

  function removefromfav(val) {
    dispatch({ type: "STAR", value: val });
  }
  const fail = <Link to="/playlist">Add favourites from playlist</Link>;

  const allresult = state
    ? state
        .filter((val) => val.favourite)
        .map((value) => {
          return (
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
                      removefromfav(value);
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
