const ImageDiv = ({ numberToShow, img }) => {
  return (
    <div className="ImageDiv">
      <img src={img} style={{ width: "500px" }} />
      {/* <p>{numberToShow}</p> */}
    </div>
  );
};

export default ImageDiv;
