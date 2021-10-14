import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

class Settings extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div style={styles.settings}>
          <FontAwesomeIcon
            icon={faWrench}
            style={{ width: "4rem", height: "50%" }}
          />
          <h3>Settings</h3>
        </div>
      </div>
    );
  }
}

const styles = {
  settings: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginTop: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Settings;
