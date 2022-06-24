import React from "react";

export default function Suggestion({ suggest, updateTxt, alterStat }) {
  var loadList;
  function searchBoxUpdate(search) {
    updateTxt(search);
    alterStat(false);
  }
  loadList = suggest
    ? suggest.map((val, index) => {
        return (
          <li
            key={val.id}
            onClick={() => {
              searchBoxUpdate(val.title);
            }}
            value={val.title}
          >
            {val.title}
          </li>
        );
      })
    : [];
  console.log("from suggestion ", suggest);

  return <ul style={{ listStyle: "None" }}>{loadList}</ul>;
}
