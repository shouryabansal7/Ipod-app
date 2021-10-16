import { useState, useEffect } from "react";
import Player from "./Player";

//using hooks to give state a song
function Favourites() {
  const [songs] = useState([
    {
      title: "Perfect",
      artist: "Ed sheeran",
      img_src: "./images/Ed_Sheeran_Perfect_Single_cover.jpeg",
      src: "./music/Perfect.mp3",
    },
  ]);

  //using hooks to set the current and next song index the array of songs
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  //passing informations as props to the player
  return (
    <div className="Favourites">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default Favourites;
