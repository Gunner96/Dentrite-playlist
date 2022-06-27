import React, { useContext } from "react";
import { PlaylistProvider } from "../Context";
import { Link } from "react-router-dom";
export default function Favourite() {
  const { value } = useContext(PlaylistProvider);
  const [state, dispatch] = value;
  const playlist = Object.keys(localStorage);
  let rawresult = [];
  playlist.forEach((key) => {
    rawresult = [...rawresult, ...state[key]];
  });
  console.log("all result", rawresult);

  const fail = (
    <Link to="/playlist">
      <h4>Currently empty, Add favourites from playlist</h4>
    </Link>
  );

  const allresult = rawresult
    ? rawresult
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
                <i
                  className="bi bi-star-fill"
                  style={{
                    color: value.favourite ? "#FF5B00" : "grey",
                    fontSize: "20px",
                  }}
                ></i>
              </div>
            </div>
          );
        })
    : [];

  console.log("player", state);

  return (
    <div className="row row-cols-1 row-cols-md-1 g-4 justify-content-first mt-2">
      <h3>FAVOURITES</h3>
      <hr />
      {allresult.length > 0 ? allresult : fail}
    </div>
  );
}
