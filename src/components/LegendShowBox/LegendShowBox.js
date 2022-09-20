import "./LegendShowBox.css";

const LegendShowBox = ({
  name,
  src,
  alt,
  etsyLink,
  redBubbleLink,
  quote,
  description,
}) => {
  return (
    <div className="legend-show-box">
      <div className="legend-show-box-img-div">
        <img src={src} alt={alt} />
      </div>
      <div className="legend-show-box-content-and-links-div">
        <div className="legend-show-box-content-div">
          <h2>{name}</h2>
          <p>{quote}</p>
          <p>{description}</p>
        </div>
        <div className="legend-show-box-links-div">
          <div className="legends-show-box-links-etsy-div">
            <h3>Etsy</h3>
            <button>Twitch Overlays</button>
          </div>
          <div className="legends-show-box-links-Red-Bubble-div">
            <h3>Red Bubble</h3>
            <button>Prints</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegendShowBox;
