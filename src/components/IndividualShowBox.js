import "../styles/componentStyles/IndividualShowBox.css";

const IndividualShowBox = ({ src, alt, name, price, index }) => {
  if (index % 2 === 0) {
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
  } else {
    return (
      <div className="IndividualShowBox">
        <div className="IndividualShowBox-price-div">
          <button>Open SEA</button>
          <div>
            <h3>Name: {name}</h3>
            <h3>Price: ${price} </h3>
          </div>
        </div>
        <div className="IndividualShowBox-image-div">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
};

export default IndividualShowBox;
