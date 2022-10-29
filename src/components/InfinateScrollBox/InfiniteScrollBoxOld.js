import "./InfiniteScrollBox.css";

const InfiniteScrollBox = ({ images }) => {
  const showImages = images.map(({ src, alt }, index) => {
    return <img src={src} alt={alt} />;
  });

  const numberOfVerticalDivs = 6;
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

  const handleScroll = (e) => {
    // console.log("scrollHeight: ", e.currentTarget.scrollHeight);
    // console.log("top", e.currentTarget.scrollTop);

    const resetPoint = 1580;

    if (window.innerWidth > 600 && window.innerWidth < 900) {
      resetPoint = 1580;
    }

    if (e.currentTarget.scrollTop > 1580) {
      e.currentTarget.scrollTop = 0;
    }
  };

  return (
    <div className="InfiniteScrollBox-Component-div" onScroll={handleScroll}>
      {showVerticalDivs}
    </div>
  );
};

export default InfiniteScrollBox;
