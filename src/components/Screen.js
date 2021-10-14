import React from "react";
import Home from "./Home";
import Settings from "./Settings";
import Games from "./Games";
import Wallpapers from "./Wallpapers";
import Music from "./Music";
import AllMusic from "./AllMusic";
import Favourites from "./Favourites";
import Artists from "./Artists";
import TitleBar from "./TitleBar";

class Screen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={style.screen}>
        {this.props.activePage === "Home" ? (
          <Home activeItem={this.props.activeItem} />
        ) : null}
        {this.props.activePage === "Wallpapers" ? <Wallpapers /> : null}
        {this.props.activePage === "Games" ? <Games /> : null}
        {this.props.activePage === "Music" ? (
          <Music activeItem={this.props.activeItem} />
        ) : null}
        {this.props.activePage === "Settings" ? <Settings /> : null}
        {this.props.activePage === "AllMusic" ? <AllMusic /> : null}
        {this.props.activePage === "Favourites" ? <Favourites /> : null}
        {this.props.activePage === "Artists" ? <Artists /> : null}
      </div>
    );
  }
}

const style = {
  screen: {
    height: "16rem",
    width: "95%%",
    borderRadius: "5%",
    backgroundColor: "white",
    border: "2px solid black",
    marginTop: "1rem",
    marginRight: "1rem",
    marginLeft: "1rem",
    marginBottom: "0.5rem",
  },
};

export default Screen;
