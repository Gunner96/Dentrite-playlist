import React, { useEffect } from "react";
import axios from "axios";

export default async function Shazam(searchVal) {
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: searchVal },
    headers: {
      "X-RapidAPI-Key": "e16379641emsha2f083fb023b2cap107ab6jsncbf62f221edf",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const Data = await axios
    .request(options)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      // console.log(error);
      return [""];
    });

  return Data;
}
