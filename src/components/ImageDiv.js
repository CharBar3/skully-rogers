const ImageDiv = ({ numberToShow, img, index }) => {
  return (
    <div className="ImageDiv">
      <img src={img} style={{ width: "100%", height: "100%" }} />
      {/* <p>{numberToShow}</p> */}
      {/* {index} */}
    </div>
  );
};

export default ImageDiv;
