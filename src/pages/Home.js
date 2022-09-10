import ImageDiv from "../components/ImageDiv";

const Home = () => {
  const images = [];

  // const imagesShowChloe = [{ name: 0 }, { name: 1 }, { name: 2 }];

  const numberOfVerticalImages = 5;
  const numberOfSkullys = 50;

  for (let index = 0; index < numberOfSkullys; index++) {
    images.push({ name: `${index}` });
  }

  const imageLinks = [
    "https://i.etsystatic.com/15374738/r/il/82ebd1/4065914572/il_794xN.4065914572_nq6b.jpg",
    "https://i.etsystatic.com/15374738/r/il/82ebd1/4065914572/il_794xN.4065914572_nq6b.jpg",
    "https://i.etsystatic.com/15374738/r/il/bb537e/3895644347/il_794xN.3895644347_chxo.jpg",
    "https://i.etsystatic.com/15374738/r/il/5e5e8c/3847887798/il_1140xN.3847887798_2tcc.jpg",
    "https://i.etsystatic.com/15374738/r/il/d72f87/3895384565/il_794xN.3895384565_dftd.jpg",
    "https://i.etsystatic.com/15374738/r/il/fb5f60/3895382771/il_794xN.3895382771_kfaa.jpg",
    "https://i.etsystatic.com/15374738/r/il/86a4ca/3848220212/il_794xN.3848220212_jkfq.jpg",
    "https://i.etsystatic.com/15374738/r/il/ea3846/3848148368/il_794xN.3848148368_f4pi.jpg",
    "https://i.etsystatic.com/15374738/r/il/b1db32/3888719856/il_794xN.3888719856_bwgc.jpg",
  ];

  const imageDivs = imageLinks.map((image, index) => {
    console.log(image);
    return <ImageDiv numberToShow={index} img={image} />;
  });
  // const imageDivs = images.map(({ name }, index) => {
  //   let yeet = "";
  //   if (index % 2 === 0) {
  //     yeet =
  //       "https://i.etsystatic.com/15374738/r/il/82ebd1/4065914572/il_794xN.4065914572_nq6b.jpg";
  //   } else {
  //     yeet =
  //       "https://i.etsystatic.com/15374738/r/il/bb537e/3895644347/il_794xN.3895644347_chxo.jpg";
  //   // }

  //   return <ImageDiv numberToShow={name} img={yeet} />;
  // });

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

  return (
    // <div id="Home-div">
    <div id="Home-div">{verticalImageDivs}</div>
    // </div>
  );
};

export default Home;
