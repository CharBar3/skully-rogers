import ImageDiv from "../components/ImageDiv";

const TestHome = () => {
  const imageLinks = [
    // "https://i.etsystatic.com/15374738/r/il/82ebd1/4065914572/il_794xN.4065914572_nq6b.jpg",
    "https://i.etsystatic.com/15374738/r/il/82ebd1/4065914572/il_794xN.4065914572_nq6b.jpg",
    "https://i.etsystatic.com/15374738/r/il/bb537e/3895644347/il_794xN.3895644347_chxo.jpg",
    "https://i.etsystatic.com/15374738/r/il/5e5e8c/3847887798/il_1140xN.3847887798_2tcc.jpg",
    "https://i.etsystatic.com/15374738/r/il/d72f87/3895384565/il_794xN.3895384565_dftd.jpg",
    "https://i.etsystatic.com/15374738/r/il/fb5f60/3895382771/il_794xN.3895382771_kfaa.jpg",
    "https://i.etsystatic.com/15374738/r/il/86a4ca/3848220212/il_794xN.3848220212_jkfq.jpg",
    "https://i.etsystatic.com/15374738/r/il/ea3846/3848148368/il_794xN.3848148368_f4pi.jpg",
    "https://i.etsystatic.com/15374738/r/il/b1db32/3888719856/il_794xN.3888719856_bwgc.jpg",
  ];

  const images = imageLinks.map((image, index) => {
    return <ImageDiv img={image} index={index} />;
  });

  let verticalImageDivs = [];
  const numberOfVerticalDivs = 10;
  let counter = 0;
  let fillerArray = [];

  for (let index = 0; index < numberOfVerticalDivs; index++) {
    // if (index > 0) {
    if (index % 2 === 1) {
      fillerArray = images.slice(-index + counter);
      counter += 1;
    }
    //   else {
    //     fillerArray = images.slice(-index);
    //   }
    // }

    const copyImages = images;

    let thingToPush = fillerArray.concat(copyImages);

    thingToPush = thingToPush.concat(copyImages);

    let marginTop = 0;
    //     verticalImageDivs.push(
    //       <div
    //         className="VerticalImageDiv"
    //         style={{
    //           marginTop: `${marginTop}px`,
    //         }}
    //       >
    //         {images}
    //       </div>
    //     );
    //     marginTop += 115;

    if (index % 2 === 0) {
      marginTop = 110;
      verticalImageDivs.push(
        <div
          className="VerticalImageDiv"
          style={{
            marginTop: `${marginTop}px`,
          }}
        >
          {thingToPush}
        </div>
      );
    } else {
      marginTop = 0;
      verticalImageDivs.push(
        <div
          className="VerticalImageDiv"
          style={{
            marginTop: `${marginTop}px`,
          }}
        >
          {thingToPush}
        </div>
      );
    }
  }

  return (
    <div id="TestHome">
      <div id="InnerTestHomeDiv">{verticalImageDivs}</div>
    </div>
  );
};

export default TestHome;
