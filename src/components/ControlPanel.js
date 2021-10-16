import React from "react";
import "../css/controlPanel.css";

//page render timer for songs
function ControlPanel({ duration, currentTime }) {
  function secondsToHms(seconds) {
    if (!seconds) return "00:00";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}:${min}:${sec}`;
    } else if (min == 0) {
      return `00:${sec}`;
    } else {
      return `${min}:${sec}`;
    }
  }

  return (
    <div className="control-panel">
      <div className="timer">{secondsToHms(currentTime)}</div>
      <div className="timer">{secondsToHms(duration)}</div>
    </div>
  );
}
export default ControlPanel;
