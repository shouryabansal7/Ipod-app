import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

class Wallpapers extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div style={styles.wallpaper}>
          <FontAwesomeIcon
            icon={faMobile}
            style={{ width: "4rem", height: "50%" }}
          />
          <h3>Wallpapers</h3>
        </div>
      </div>
    );
  }
}

const styles = {
  wallpaper: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginTop: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Wallpapers;
