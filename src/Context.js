import React, { createContext, useState, useReducer } from "react";

export const PlaylistProvider = createContext();

let InitialList = {};

const playlist = Object.keys(localStorage);

if (playlist && playlist.length > 0) {
  playlist.forEach((element) => {
    var list = JSON.parse(localStorage.getItem(element));
    InitialList[element] = list;
  });
  console.log("initial", InitialList);
}

// if (localPlaylist) {
//   InitialList = [...localPlaylist];
// } else if (localPlaylist == null) {
//   InitialList = [];
// }

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      let current;
      if (state[action.play]) {
        current = state[action.play];
      } else {
        state = { ...state, [action.play]: [] };
        current = state[action.play];
      }
      console.log("state from add", state);

      console.log("current from add", current);
      const contains = current.some((elem) => action.value.id === elem.id);
      if (!contains) {
        const track_list = [...current, action.value];
        console.log("current", current);
        console.log("new", track_list);
        localStorage.setItem(action.play, JSON.stringify(track_list));
        return { ...state, [action.play]: track_list };
      } else {
        return state;
      }

    case "STAR":
      console.log("state from star", state);
      const starplaylist = action.play;
      console.log("starPlay", starplaylist);
      const currentStar = state[action.play];

      const newobj = { ...action.value, favourite: !action.value.favourite };
      console.log("new obj", newobj);
      console.log(currentStar, "currentStar");
      const newStar = state[action.play].map((val) => {
        if (val.id === newobj.id) {
          return newobj;
        } else {
          return val;
        }
      });
      console.log("newStar", newStar);
      localStorage.setItem(starplaylist, JSON.stringify(newStar));
      return { ...state, [starplaylist]: newStar };

    case "DELETE":
      console.log("delete playlist name", action.play);
      const deleteplaylist = action.play;
      const deleteStar = state[action.play];
      const remaining = deleteStar
        .filter((val) => val.id !== action.value.id)
        .map((val) => {
          return val;
        });

      console.log("remaining", remaining);
      localStorage.setItem(action.play, JSON.stringify(remaining));
      // deleteState[deleteplaylist] = remaining;
      return { ...state, [deleteplaylist]: remaining };

    case "DELPLAY":
      const newState = delete state[action.play];
      return newState;
    default:
      return state;
  }
};
export default function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, InitialList);
  const [playlist, addplaylist] = useState([]);

  return (
    <PlaylistProvider.Provider value={{ value: [state, dispatch] }}>
      {children}
    </PlaylistProvider.Provider>
  );
}
