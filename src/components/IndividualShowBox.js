import "../styles/componentStyles/IndividualShowBox.css";

const IndividualShowBox = ({ src, alt, name, price }) => {
  return (
    <div className="IndividualShowBox">
      <div className="IndividualShowBox-image-div">
        <img src={src} alt={alt} />
      </div>
      <div className="IndividualShowBox-price-div">
        <div>
          <h3>Name: {name}</h3>
          <h3>Price: ${price} </h3>
        </div>
        <button>Open SEA</button>
      </div>
    </div>
  );
};

export default IndividualShowBox;
