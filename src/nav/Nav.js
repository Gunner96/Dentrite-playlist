import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="col mt-5">
      <ul className="nav row g-1">
        <li className="nav-item row">
          <Link to="/" className="nav-link active" aria-current="page" href="#">
            <p className="linker">
              <i className="bi bi-list mx-2"></i>Home
            </p>
          </Link>
        </li>
        <li className="nav-item row">
          <Link
            to="/Search"
            className="nav-link active"
            aria-current="page"
            href="#"
          >
            <p className="linker .d-sm-none .d-md-block">
              <i className="bi bi-search mx-2"></i>Search
            </p>
          </Link>
        </li>
        <li className="nav-item row">
          <Link to="/playlist" className="nav-link" href="#">
            <p className="linker">
              <i className="bi bi-play-circle mx-2"></i>Playlist
            </p>
          </Link>
        </li>
        <li className="nav-item row">
          <Link to="/favourite" className="nav-link" href="#">
            <p className="linker">
              <i className="bi bi-heart-fill mx-2"></i>Favourite
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
