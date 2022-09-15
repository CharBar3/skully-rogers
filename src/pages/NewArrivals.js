import IndividualShowBox from "../components/IndividualShowBox";
import "../styles/pageStyles/NewArrivalsPage.css";

const NewArrivals = ({ images }) => {
  const content = images.map(({ src, alt, name, price }, index) => {
    return (
      <IndividualShowBox
        src={src}
        alt={alt}
        name={name}
        price={price}
        index={index}
      />
    );
  });

  return <div id="newarrivals">{content}</div>;
};

export default NewArrivals;
