import "./InfiniteScrollBox.css";

import { useEffect, useState } from "react";

const InfiniteScrollBox = ({ images }) => {
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 1500) {
      setNumberOfColumns(6);
    } else {
      setNumberOfColumns(18);
    }
  };

  const showImages = images.map(({ src, alt }, index) => {
    return (
      <div className="ImageWrapper">
        <img src={src} alt={alt} />
      </div>
    );
  });

  const [numberOfColumns, setNumberOfColumns] = useState(6);

  let Columns = [];
  let counter = 0;
  let fillerArray = [];

  for (let index = 0; index < numberOfColumns; index++) {
    if (index % 2 === 1) {
      fillerArray = showImages.slice(-index + counter);
      counter += 1;
    }

    const copyImages = showImages;
    let thingToPush = fillerArray.concat(copyImages);
    thingToPush = thingToPush.concat(copyImages);

    Columns.push(thingToPush);
  }
  const [columnsState, setColumnsState] = useState(Columns);

  const showColumns = columnsState.map((images) => {
    return <div className="Column">{images}</div>;
  });

  // works for Android but IOS stops scrolling on scrollto reset
  const handleScrollOld = (e) => {
    // console.log("scrollHeight: ", e.currentTarget.scrollHeight);
    // console.log("top", e.currentTarget.scrollTop);
    // console.log("width", e.currentTarget.scrollWidth);
    let resetPoint = e.currentTarget.scrollHeight * 0.43;
    if (window.innerWidth > 1500) {
      resetPoint = e.currentTarget.scrollHeight * 0.334;
    }
    if (e.currentTarget.scrollTop > resetPoint) {
      e.currentTarget.scroll({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  };

  let scrollTopCheckpoint = 1000;

  const handleScroll = (e) => {
    console.log();

    if (e.currentTarget.scrollTop > scrollTopCheckpoint) {
      scrollTopCheckpoint += 1000;
      for (let index = 0; index < columnsState.length; index++) {
        const column = columnsState[index];

        const newColumn = column.concat(showImages);

        columnsState[index] = newColumn;
      }
      setColumnsState([...columnsState]);
    }
  };

  return (
    <div className="InfiniteScrollBox" onScroll={handleScroll}>
      {showColumns}
    </div>
  );
};

export default InfiniteScrollBox;
