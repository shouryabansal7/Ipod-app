import React from "react";

class Artists extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={styles.artistsContainer}>
        <h4 style={{ marginBottom: "0.5rem", margin: "auto" }}>Artists</h4>
        <div style={styles.info}>
          <div style={styles.imageContainer1}></div>
          <div style={styles.subInfo}>
            <p>Ed Sheeran</p>
          </div>
        </div>
        <div style={styles.info}>
          <div style={styles.imageContainer2}></div>
          <div style={styles.subInfo}>
            <p>Slander</p>
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  artistsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer1: {
    height: "80px",
    width: "80px",
    backgroundImage: `url("./images/Ed_Sheeran_Perfect_Single_cover.jpeg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignSelf: "center",
  },
  imageContainer2: {
    height: "80px",
    width: "80px",
    backgroundImage: `url("./images/Love-Is-Gone-English-2021-20210226205252-500x500.jpeg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignSelf: "center",
    marginLeft: "-4%",
  },
  image: {
    width: "2rem",
    height: "2rem",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  subInfo: {
    alignSelf: "center",
  },
};

export default Artists;
