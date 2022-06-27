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

  useEffect(() => {
    const newSuggest = Shazam(searchText);
    newSuggest.then((value) => {
      updateSuggestion(value);
    });
  }, [searchText]);

  // function displaySearch() {
  //   const searchResult = Shazam(searchText);
  //   searchResult.then((value) => {
  //     updateres(value);
  //   });
  //   changeSuggestionStatus(false);
  // }
  useEffect(() => {
    const searchResult = Shazam(searchText);
    searchResult.then((value) => {
      updateres(value);
    });
  }, [searchText]);

  return (
    <div className="row justify-content-center pt-5 search-page">
      <div className="col-lg-6 ">
        <input
          onChange={(e) => {
            updateText(e.target.value);
          }}
          value={searchText}
          type="text"
          className="form-control search-bar"
          placeholder="Search Track/Artist"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
        <label for="formFile" class="form-label"></label>
      </div>

      {/* {suggestionStatus && (
          <Suggestion
            style={{ zIndex: "100" }}
            suggest={suggest}
            updateTxt={updateText}
            alterStat={changeSuggestionStatus}
          />
        )}
        {!suggestionStatus && res && <Loader result={res} />} */}
      <hr />
      <div className="row-2 justify-content-center">
        <Loader result={res} />
      </div>
    </div>
  );
}
