import React, { useContext } from "react";
import { PlaylistProvider } from "../Context";

export default function Loader({ result }) {
  const { value } = useContext(PlaylistProvider);
  const [state, dispatch] = value;
  function addtoplaylist(val) {
    val = { ...val, favourite: false };
    console.log("ind val", val);
    dispatch({ type: "ADD", value: val });
  }

  const allresult = result
    ? result.map((value) => {
        return (
          <div
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
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {
                    addtoplaylist(value);
                  }}
                >
                  Add to playlist
                </button>
              </div>
            </div>
          </div>
        );
      })
    : [];

  return (
    <div className="row row-cols-1 row-cols-md-1 g-4 justify-content-first mt-2">
      {allresult.length > 0 ? allresult : "Not available"}
    </div>
  );
}
