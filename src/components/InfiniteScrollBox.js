import "../styles/componentStyles/InfiniteScrollBox.css";

const InfiniteScrollBox = ({ images }) => {
  const showImages = images.map(({ src, alt }, index) => {
    return <img src={src} alt={alt} />;
  });

  const numberOfVerticalDivs = 5;
  let verticalDivs = [];

  for (let index = 0; index < numberOfVerticalDivs; index++) {
    verticalDivs.push(showImages);
  }

  const showVerticalDivs = verticalDivs.map((images) => {
    return <div className="vertical-div">{images}</div>;
  });

  return (
    <div className="InfiniteScrollBox-Component-div">{showVerticalDivs}</div>
  );
};

export default InfiniteScrollBox;
