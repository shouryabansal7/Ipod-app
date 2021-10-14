import React from "react";
import { ListGroup } from "react-bootstrap";

class Music extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={styles.musicScreen}>
        <div style={styles.menuListLeft}>
          <h2>Music.js</h2>
          <ListGroup>
            <ListGroup.Item
              style={{ border: "0" }}
              className={this.props.activeItem === "AllMusic" ? "active" : ""}
            >
              All Music{" "}
              {this.props.activeItem === "AllMusic" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0" }}
              className={this.props.activeItem === "Favourites" ? "active" : ""}
            >
              Favourites{" "}
              {this.props.activeItem === "Favourites" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0" }}
              className={this.props.activeItem === "Artists" ? "active" : ""}
            >
              Artists{" "}
              {this.props.activeItem === "Artists" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div style={styles.imageRight}></div>
      </div>
    );
  }
}

const styles = {
  musicScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirecton: "row",
  },
  menuListLeft: {
    border: "1px solid lightgrey",
    height: "100%",
    width: "50%",
  },
  imageRight: {
    border: "1px solid lightgrey",
    height: "100%",
    width: "50%",
  },
};

export default Music;
