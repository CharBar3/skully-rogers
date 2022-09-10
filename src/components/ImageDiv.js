const ImageDiv = ({ numberToShow, img, index }) => {
  return (
    <div className="ImageDiv">
      <img src={img} style={{ width: "200px" }} />
      {/* <p>{numberToShow}</p> */}
      {/* {index} */}
    </div>
  );
};

export default ImageDiv;
