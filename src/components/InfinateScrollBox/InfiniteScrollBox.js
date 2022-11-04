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

  const [numberOfColumns, setNumberOfColumns] = useState(6);

  const handleResize = () => {
    console.log("handleResize");
    if (window.innerWidth < 1500) {
      console.log("set number to 6");
      // setNumberOfColumns(6);
      // setColumnsState(columns);

      setColumnsState((prevState) => {
        setNumberOfColumns(6);
        return columns;
      });
    } else {
      console.log("set number to 18");
      // setNumberOfColumns(18);
      // setColumnsState(columns);
      setColumnsState((prevState) => {
        setNumberOfColumns(18);
        return columns;
      });
    }
  };

  const showImages = images.map(({ src, alt }, index) => {
    return (
      <div className="ImageWrapper">
        <img src={src} alt={alt} />
      </div>
    );
  });

  let columns = [];
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

    columns.push(thingToPush);
  }

  const [columnsState, setColumnsState] = useState(columns);

  const showColumns = columns.map((images) => {
    return <div className="Column">{images}</div>;
  });

  let checkpoint = 0;
  const handleScroll = (e) => {
    checkpoint += 25;
    if (checkpoint > 100) {
      checkpoint = 0;
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
