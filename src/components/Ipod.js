import React from "react";
import ZingTouch from "zingtouch";
import Screen from "./Screen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForward,
  faBackward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";

class Ipod extends React.Component {
  //seting the initial state
  constructor() {
    super();
    this.state = {
      activeItem: "Wallpapers",
      activePage: "Home",
      enter: 0,
    };
  }

  //function to change page
  changePage = () => {
    if (this.state.activeItem === "Music") {
      this.setState({
        activeItem: "AllMusic",
        activePage: this.state.activeItem,
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem,
        activePage: this.state.activeItem,
      });
    }
  };

  //function to change page to home
  changePageToHome = () => {
    if (
      this.state.activePage === "AllMusic" ||
      this.state.activePage === "Favourites" ||
      this.state.activePage === "Artists"
    ) {
      this.setState({
        activeItem: "Music",
        activePage: "Home",
      });
    } else {
      this.setState({
        activeItem: this.state.activePage,
        activePage: "Home",
      });
    }
  };

  componentDidUpdate() {
    console.log("Updated");
  }

  rotate = () => {
    var currentAngle = 15;
    var Parentregion = document.getElementById("wheel-container");
    var myRegion = new ZingTouch.Region(Parentregion);
    var childRegion = document.getElementById("wheel");
    var change = 0;
    var self = this;
    self.state.enter = self.state.enter + 1;

    //setting the parent and child region
    if (self.state.enter < 2) {
      //using rotate feacture
      //keeping the count of the times entered the region in one click
      myRegion.bind(childRegion, "rotate", function (e) {
        console.log("working rotate feature");

        //calculating the angle difference
        var newAngle = e.detail.distanceFromLast;
        console.log(currentAngle, newAngle);

        //if scroll is clockwise
        if (newAngle < 0) {
          console.log(change);
          change++;
          //if change in angle is significant
          if (change === 45) {
            console.log("change state");
            change = 0;
            //for the active page home
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "Wallpapers") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "Games",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "Wallpapers",
                });
              }
              //for the active page music menu will be of music page
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "AllMusic") {
                self.setState({
                  activeItem: "Favourites",
                });
              } else if (self.state.activeItem === "Favourites") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "AllMusic",
                });
              }
            }
          }
          //if the scroll is non clockwise
        } else {
          console.log(change);
          change++;
          //if change in angle is significant
          if (change === 45) {
            console.log("change state");
            change = 0;
            //for the active page home
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "Wallpapers") {
                self.setState({
                  activeItem: "Settings",
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "Wallpapers",
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Music",
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "Games",
                });
              }
              //for the active page music menu will be of music page
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "AllMusic") {
                self.setState({
                  activeItem: "Artists",
                });
              } else if (self.state.activeItem === "Favourites") {
                self.setState({
                  activeItem: "AllMusic",
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "Favourites",
                });
              }
            }
          }
        }
      });
    } else {
      console.log("Not allowed to enter");
    }
  };

  //rendering the ipod screen and buttons (wheel)
  //on clicking the menu the page changes to home
  //central circle button is used to click and change page
  render() {
    return (
      <div style={styles.ipodContainer}>
        <Screen
          activePage={this.state.activePage}
          activeItem={this.state.activeItem}
        />
        <div style={styles.wheelContainer} id="wheel-container">
          <div id="wheel" style={styles.wheel} onMouseOver={this.rotate}>
            <div style={styles.buttonContainer}>
              <div style={styles.menuButton}>
                <p
                  onClick={this.changePageToHome}
                  style={{
                    color: "lightgrey",
                    alignSelf: "center",
                    fontWeight: "bolder",
                  }}
                >
                  MENU
                </p>
              </div>
            </div>
            <div style={styles.buttonContainer}>
              <div style={styles.middleButtons}>
                <FontAwesomeIcon
                  icon={faBackward}
                  style={{
                    color: "lightgrey",
                    alignSelf: "center",
                    width: "2rem",
                    height: "2rem",
                  }}
                />
                <div
                  onClick={this.changePage}
                  style={{
                    backgroundColor: "lightgrey",
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "50%",
                  }}
                ></div>
                <FontAwesomeIcon
                  icon={faForward}
                  style={{
                    color: "lightgrey",
                    alignSelf: "center",
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </div>
            </div>
            <div style={styles.buttonContainer}>
              <div style={styles.playButton}>
                <FontAwesomeIcon
                  icon={faFastForward}
                  style={{
                    color: "lightgrey",
                    alignSelf: "center",
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//adding styles to ipod wheel
const styles = {
  ipodContainer: {
    height: "34rem",
    width: "18rem",
    backgroundColor: "lightgrey",
    margin: "auto",
    marginTop: "7%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    borderRadius: "6%",
  },
  wheelContainer: {
    height: "14rem",
    width: "inherit",
    backgroundColor: "lightgrey",
    alignSelf: "flex-end",
  },
  wheel: {
    width: "80%",
    height: "90%",
    backgroundColor: "white",
    margin: "auto",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "85%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuButton: {
    alignSelf: "center",
  },
  playButton: {
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    width: "2rem",
    height: "2rem",
  },
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

export default Ipod;
