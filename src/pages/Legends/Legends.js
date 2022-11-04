import LegendShowBox from "../../components/LegendShowBox/LegendShowBox";
import "./Legends.css";
import { useEffect } from "react";

const Legends = ({ images, setNavButtonBorders }) => {
  useEffect(() => {
    setNavButtonBorders({
      home: "",
      legends: "3px solid black",
      theArtist: "",
    });
    return () => {
      // setNavButtonBorders({
      //   home: "",
      //   legends: "2px solid black",
      //   theArtist: "",
      // });
    };
  }, []);

  const showLegends = images.map(
    ({ name, src, alt, etsyLink, redBubbleLink, quote, description }) => {
      return (
        <LegendShowBox
          name={name}
          src={src}
          alt={alt}
          etsyLink={etsyLink}
          redBubbleLink={redBubbleLink}
          quote={quote}
          description={description}
        />
      );
    }
  );

  return <div id="legends">{showLegends}</div>;
};
export default Legends;
