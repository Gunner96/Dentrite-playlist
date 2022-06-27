import React from "react";
import header from "./header.jpg";
export default function Header() {
  const styles = {
    // backgroundImage: `url(${header})`,
    height: "150px",
    maxWidth: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderBottom: "solid",
    // opacity: "0.1",
    // backgroundColor: "#54BAB9",
  };
  return (
    <div style={styles}>
      {/* <img
        src={header}
        class="img-fluid"
        style={{ width: "500px", objectFit: "cover" }}
        alt="header"
      /> */}
      <div className="header"></div>
      <p className="main-title">Dendrite Playlist</p>
    </div>
  );
}
