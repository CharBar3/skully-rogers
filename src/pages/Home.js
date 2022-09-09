import ImageDiv from "../components/ImageDiv";

const Home = () => {
  const images = [];

  const numberOfVerticalImages = 50;
  const numberOfSkullys = 50;

  for (let index = 0; index < numberOfSkullys; index++) {
    images.push({ name: `${index}` });
  }

  const imageDivs = images.map(({ name }) => {
    return <ImageDiv name={name} />;
  });

  const verticalImageDivs = [];

  let marginTop = 0;

  for (let index = 0; index < numberOfVerticalImages; index++) {
    // if (index % 2 === 0) {
    //   verticalImageDivs.push(
    //     <div className="vertical-div" style={{ marginTop: "50px" }}>
    //       {imageDivs}
    //     </div>
    //   );
    // } else {
    //   verticalImageDivs.push(<div className="vertical-div">{imageDivs}</div>);
    // }

    marginTop += 50;

    verticalImageDivs.push(
      <div className="vertical-div" style={{ marginTop: `${marginTop}px` }}>
        {imageDivs}
      </div>
    );
  }

  console.log(verticalImageDivs);

  return (
    <div id="Home-div">
      <div id="InnerHome-div">{verticalImageDivs}</div>
    </div>
  );
};

export default Home;
