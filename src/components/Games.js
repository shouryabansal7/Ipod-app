import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

//render the game page in the ipod using fontawesome icons
class Games extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div style={styles.games}>
          <FontAwesomeIcon
            icon={faGamepad}
            style={{ width: "4rem", height: "50%" }}
          />
          <h3>Games</h3>
        </div>
      </div>
    );
  }
}

const styles = {
  games: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginTop: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Games;
