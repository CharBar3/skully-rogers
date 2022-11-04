import InfiniteScrollBox from "../../components/InfinateScrollBox/InfiniteScrollBox";
import "./Home.css";
import { useEffect } from "react";

const Home = ({ images, setNavButtonBorders }) => {
  useEffect(() => {
    setNavButtonBorders({
      home: "3px solid black",
      legends: "",
      theArtist: "",
    });
    return () => {
      // setNavButtonBorders({
      //   home: "3px solid black",
      //   legends: "",
      //   theArtist: "",
      // });
    };
  }, []);

  return (
    <div id="HomePage-div">
      <InfiniteScrollBox images={images} />
    </div>
  );
};

export default Home;
