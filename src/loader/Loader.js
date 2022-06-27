import React, { useContext, useEffect, useState } from "react";
import Popup from "./Popup";

export default function Loader({ result }) {
  // const { value } = useContext(PlaylistProvider);
  // const [state, dispatch] = value;
  const [trigger, updateTrigger] = useState(false);
  const [activeTrack, updateTrack] = useState();
  const [finalRes, resultUpdate] = useState([]);
  // function addtoplaylist(val) {
  //   val = { ...val, favourite: false };
  //   console.log("ind val", val);
  //   dispatch({ type: "ADD", value: val });
  // }

  useEffect(() => {
    const allresult = result
      ? result.map((value) => {
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
                    className="btn btn-primary"
                    type="button"
                    onClick={() => {
                      updateTrack(value);
                      updateTrigger(!trigger);
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
    result && result.length > 0 ? resultUpdate(allresult) : resultUpdate([]);
  }, [result]);

  console.log(result);
  return (
    <div className="row row-cols-1 row-cols-md-1 g-4  mt-2">
      {finalRes.length > 0 ? finalRes : "Not available"}
      <Popup triggerVal={trigger} track={activeTrack} trigger={updateTrigger} />
    </div>
  );
}
