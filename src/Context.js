import React, { createContext, useState, useReducer } from "react";

export const PlaylistProvider = createContext();

let InitialList = [];

const localPlaylist = JSON.parse(localStorage.getItem("playlist"));
console.log("loal", localPlaylist);
if (localPlaylist) {
  InitialList = [...localPlaylist];
} else if (localPlaylist == null) {
  InitialList = [];
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const contains = state.some(
        (elem) => JSON.stringify(action.value) === JSON.stringify(elem)
      );
      if (!contains) {
        const newState = [...state, action.value];
        localStorage.setItem("playlist", JSON.stringify(newState));
        return newState;
      }
      return state;

    case "STAR":
      const newobj = { ...action.value, favourite: !action.value.favourite };
      console.log("new obj", newobj);
      const newStar = state.map((val) => {
        if (val.id === newobj.id) {
          return newobj;
        } else {
          return val;
        }
      });
      localStorage.setItem("playlist", JSON.stringify(newStar));
      return newStar;
    case "DELETE":
      const remaining = state
        .filter((val) => val.id !== action.value.id)
        .map((val) => {
          return val;
        });
      localStorage.setItem("playlist", JSON.stringify(remaining));

      return remaining;
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
