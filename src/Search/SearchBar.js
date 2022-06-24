import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Suggestion from "./Suggestion";
import Shazam from "../api/shazam";
import Loader from "../loader/Loader";
// import { PlaylistProvider } from "../Context";
import Button from "bootstrap";

export default function Search() {
  const [searchText, updateText] = useState("");
  const [res, updateres] = useState([]);
  // const [showSearch, updateSearch] = useState(false);
  const [suggest, updateSuggestion] = useState([]);
  const [suggestionStatus, changeSuggestionStatus] = useState(true);

  // const { value } = useContext(PlaylistProvider);
  // const [state, dispatch] = value;

  // const urlling = "https://deezerdevs-deezer.p.rapidapi.com/search";
  useEffect(() => {
    const newSuggest = Shazam(searchText);
    newSuggest.then((value) => {
      updateSuggestion(value);
    });
  }, [searchText]);

  function activeSearch(e) {
    console.log("firs", e.target.value);
    updateText(e.target.value);
    updateres("");
    changeSuggestionStatus(true);
  }

  function displaySearch(e) {
    const searchResult = Shazam(searchText);
    searchResult.then((value) => {
      updateres(value);
    });
    changeSuggestionStatus(false);
  }

  return (
    <div>
      <label>
        {/* <input type="text" onChange={activeSearch} value={searchText} /> */}
        {/* <button onClick={displaySearch}>Search</button> */}

        <div className="input-group mb-3">
          <input
            onChange={activeSearch}
            value={searchText}
            type="text"
            className="form-control"
            placeholder="Search Track/Artist"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
          <button
            type="button"
            onClick={displaySearch}
            on
            className="btn btn-primary input-group-text"
          >
            Search
          </button>
        </div>

        {suggestionStatus && (
          <Suggestion
            style={{ zIndex: "100" }}
            suggest={suggest}
            updateTxt={updateText}
            alterStat={changeSuggestionStatus}
          />
        )}
        {!suggestionStatus && res && <Loader result={res} />}
      </label>
    </div>
  );
}
