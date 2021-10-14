import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Controls(props) {
  return (
    <div
      className="c-player--controls"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: "1rem",
      }}
    >
      <button
        className="skip-btn"
        onClick={() => props.SkipSong(false)}
        style={style.button}
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
        style={style.button}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button
        className="skip-btn"
        onClick={() => props.SkipSong()}
        style={style.button}
      >
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

const style = {
  button: {
    backgroundColor: "white",
    color: "lightgrey",
    textDecoration: "none",
    border: "none",
  },
};

export default Controls;
