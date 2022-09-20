import InfiniteScrollBox from "../../components/InfinateScrollBox/InfiniteScrollBox";
import "./Home.css";
import { useEffect } from "react";

const Home = ({ images, setNavButtonBorders }) => {
  // useEffect(() => {
  //   setNavButtonBorders({
  //     home: "2px solid black",
  //     newArrivals: "",
  //     about: "",
  //   });
  // });

  useEffect(() => {
    setNavButtonBorders({
      home: "2px solid black",
      legends: "",
      about: "",
    });
    return () => {
      setNavButtonBorders({
        home: "2px solid black",
        legends: "",
        about: "",
      });
    };
  }, []);

  return (
    <div id="HomePage-div">
      <InfiniteScrollBox images={images} />
    </div>
  );
};

export default Home;
