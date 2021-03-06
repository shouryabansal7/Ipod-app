import React from "react";
import { ListGroup } from "react-bootstrap";

//has the main home page rendered here
class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={styles.homeScreen}>
        <div style={styles.menuListLeft}>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "larger",
            }}
          >
            Ipod
          </h2>
          <ListGroup>
            {/*the list item which matches the condition of active item has the active className
            which helps in highlighting it */}
            <ListGroup.Item
              style={{ border: "0" }}
              className={this.props.activeItem === "Wallpapers" ? "active" : ""}
            >
              Wallpapers{" "}
              {this.props.activeItem === "Wallpapers" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0" }}
              className={this.props.activeItem === "Music" ? "active" : ""}
            >
              Music{" "}
              {this.props.activeItem === "Music" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0" }}
              className={this.props.activeItem === "Games" ? "active" : ""}
            >
              Games{" "}
              {this.props.activeItem === "Games" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0" }}
              className={this.props.activeItem === "Settings" ? "active" : ""}
            >
              Settings{" "}
              {this.props.activeItem === "Settings" ? (
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
  homeScreen: {
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
    backgroundImage: 'url("./images/pexels-simon-gough-7224241.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 12px 12px 0",
  },
};

export default Home;
