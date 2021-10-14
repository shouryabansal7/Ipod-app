import React from "react";

function Details(props) {
  return (
    <div
      className="c-player--details"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: "1rem",
      }}
    >
      <div className="details-img" style={{ height: "40%", width: "40%" }}>
        <img
          src={props.song.img_src}
          alt=""
          style={{ height: "100%", width: "100%", borderRadius: "5%" }}
        />
      </div>
      <div>
        <h4 className="details-title" style={{ color: "darkgrey" }}>
          {props.song.title}
        </h4>
        <h6 className="details-artist" style={{ color: "darkgrey" }}>
          {props.song.artist}
        </h6>
      </div>
    </div>
  );
}

export default Details;
