import "./InfiniteScrollBox.css";

const InfiniteScrollBox = ({ images }) => {
  const showImages = images.map(({ src, alt }, index) => {
    return <img src={src} alt={alt} />;
  });

  const numberOfVerticalDivs = 10;
  let verticalDivs = [];
  let counter = 0;
  let fillerArray = [];

  for (let index = 0; index < numberOfVerticalDivs; index++) {
    if (index % 2 === 1) {
      fillerArray = showImages.slice(-index + counter);
      counter += 1;
    }

    const copyImages = showImages;
    let thingToPush = fillerArray.concat(copyImages);
    thingToPush = thingToPush.concat(copyImages);

    verticalDivs.push(thingToPush);
  }

  const showVerticalDivs = verticalDivs.map((images) => {
    return <div className="vertical-div">{images}</div>;
  });

  return (
    <div className="InfiniteScrollBox-Component-div">{showVerticalDivs}</div>
  );
};

export default InfiniteScrollBox;
