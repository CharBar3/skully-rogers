import { useEffect } from "react";
import Bio from "../../components/Bio/Bio";

import "./TheArtist.css";

const TheArtist = ({ setNavButtonBorders }) => {
  useEffect(() => {
    setNavButtonBorders({
      home: "",
      legends: "",
      theArtist: "3px solid black",
    });
    return () => {
      // setNavButtonBorders({
      //   home: "",
      //   legends: "",
      //   theArtist: "2px solid black",
      // });
    };
  }, []);
  return (
    <div id="the-artist">
      <Bio />
    </div>
  );
};

export default TheArtist;
