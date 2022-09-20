import IndividualShowBox from "../components/IndividualShowBox";
import "../styles/pageStyles/NewArrivalsPage.css";
import { useEffect } from "react";

const NewArrivals = ({ images, navButtonBorders, setNavButtonBorders }) => {
  // useEffect(() => {
  //   setNavButtonBorders({
  //     home: "",
  //     newArrivals: "2px solid black",
  //     about: "",
  //   });
  // });

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
