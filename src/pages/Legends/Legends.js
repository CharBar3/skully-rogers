import LegendShowBox from "../../components/LegendShowBox/LegendShowBox";
import "./Legends.css";

const Legends = ({ images }) => {
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
