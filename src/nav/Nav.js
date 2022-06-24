import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      {/* <Link to="/">Search</Link>
      <Link to="/playlist">Playlist</Link>
      <Link to="/favourite">Favourites</Link> */}

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Search"
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/playlist" className="nav-link" href="#">
            Playlist
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/favourite" className="nav-link" href="#">
            Favourite
          </Link>
        </li>
      </ul>
    </div>
  );
}
