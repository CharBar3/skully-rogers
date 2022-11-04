const images = [
  {
    src: "https://i.imgur.com/1XMebMy.png",
    alt: "Horizon Apex Legends",
    name: "Horizon",
    price: 555,
    etsyLink:
      "https://www.etsy.com/listing/1229304849/apex-legends-health-bar-overlay-horizon?click_key=99a97d8920571e3a58bcde72a1d00732215b4131%3A1229304849&click_sum=bbbb0bb3&ref=shop_home_active_17&sts=1",
    redBubbleLink: "",
    quote: "C'mon little Newtie, we've got work to do.",
    description:
      "Dr. Mary Somers, better know as Horizon. A famous scientist from the floating city of Olympus, she joined the Apex Games to fund time travel research in order to return to her young son, Newton",
  },

  {
    src: "https://i.imgur.com/g3xRphV.png",
    alt: "Pathfinder Apex Legends",
    name: "Pathfinder",
    price: 555,
    etsyLink:
      "https://www.etsy.com/listing/1230859549/apex-legends-health-bar-overlay?click_key=c38642b50dfee90f714d8e629eb94eac44142840%3A1230859549&click_sum=dc5b6c78&ref=shop_home_active_11&sts=1",
    redBubbleLink: "",
    quote: `Losing isn't fun. That's why I don't do it.`,
    description: `Pathfinder is the picture of optimism. A MRVN (Mobile Robotic Versatile eNtity) modified to specialize in location scouting and surveying. His moniker is "Forward Scout”.`,
  },
  {
    src: "https://i.imgur.com/Ou5j9iu.png",
    alt: "Octane Apex Legends",
    name: "Octane",
    price: 555,
    etsyLink:
      "https://www.etsy.com/listing/1226597703/apex-legends-octane-health-bar?click_key=9f9ed89dfd7a54608f402b8c178d19079900f6d0%3A1226597703&click_sum=907a466b&ref=shop_home_active_3&sts=1",
    redBubbleLink: "",
    quote: "Whoa…what a rush!",
    description: `Octavio Silva, also known by his alias Octane. As a renowned daredevil and competitor in the
    Apex Games, his moniker is “The Adrenaline Junkie”.`,
  },
  {
    src: "https://i.imgur.com/TxqzKwR.png",
    alt: "Valkyrie Apex Legends",
    name: "Valkyrie",
    price: 555,
    etsyLink:
      "https://www.etsy.com/listing/1217534290/apex-legends-health-bar-overlay-valkrie?click_key=999155184c086ad385ea8f23cd36c48280bafb90%3A1217534290&click_sum=94c83f73&ref=shop_home_active_5&sts=1",
    redBubbleLink: "",
    quote: "The skies belong to me now.",
    description:
      "Bold, brash, fiery and fierce, Kairi Imahara isn’t above greasing palms and bending the law. Like her father, she is most comfortable in the skies. ",
  },

  {
    src: "https://i.imgur.com/rE22NTN.png",
    alt: "Wattson Apex Legends",
    name: "Wattson",
    price: 555,
    etsyLink:
      "https://www.etsy.com/listing/1212638196/apex-legends-health-bar-overlay-wattson?click_key=5895aee506d0b9c3719a4b44ca6afa6b22b006a1%3A1212638196&click_sum=3bf554b3&ref=shop_home_active_13&sts=1",
    redBubbleLink: "",
    quote: "Power is everything. You only think you have it.",
    description:
      "Though Natalie “Wattson” Paquette could be completely distracted one moment and hyper-focused the next, electricity grounds her – its ordered, predictable flow made sense in a way the rest of the world doesn’t. ",
  },
  {
    src: "https://i.imgur.com/UWo0FQD.png",
    alt: "Lifeline Apex Legends",
    name: "Lifeline",
    price: 555,
    etsyLink:
      "https://www.etsy.com/listing/1215368016/apex-legends-health-bar-overlay-lifeline?click_key=dae7eff88dc45b73a2bbbf04a3d4fe3c9631566b%3A1215368016&click_sum=8f91079b&ref=shop_home_active_19&sts=1",
    redBubbleLink: "",
    quote: "Check yo self - or wreck yo self.",
    description:
      "Alexander Nox used to be one of the brightest scientists in the employ of Humbert Labs. But he soon realized that progress was being hampered by his testing methods. Now competing in the Apex Games under the name Caustic, he puts his gaseous creations to work and observes their effects with great interest.",
  },

  {
    src: "https://i.imgur.com/S3R3JSw.png",
    alt: "Caustic Apex Legends",
    name: "Caustic",
    price: 555,
    etsyLink:
      "https://www.etsy.com/listing/1214674906/apex-legends-health-bar-overlay-caustic?click_key=636b7e1216a4c311132c44156f1f7395f42cadf1%3A1214674906&click_sum=bc300b3b&ref=shop_home_active_14&sts=1",
    redBubbleLink: "",
    quote: "I don't concern myself with the ambitions of insects.",
    description:
      "Alexander Nox used to be one of the brightest scientists in the employ of Humbert Labs. But he soon realized that progress was being hampered by his testing methods. Now competing in the Apex Games under the name Caustic, he puts his gaseous creations to work and observes their effects with great interest.",
  },
  {
    src: "https://i.imgur.com/XSdc7pN.png",
    alt: "Gibralter Apex Legends",
    name: "Gibraltar",
    price: 555,
    etsyLink:
      "https://www.etsy.com/listing/1229300339/apex-legends-health-bar-overlay?click_key=e8784fb71716f338ab5b1a977291314eef8fae10%3A1229300339&click_sum=ee99c758&ref=shop_home_active_27&sts=1",
    redBubbleLink: "",
    quote: "Try to move me; it'll be fun.",
    description:
      "Gibraltar is a gentle giant with a wild side. He has always been skilled at getting others out of dangerous situations that are common in the Outlands. Like a big brother, he always has your back.",
  },
  {
    src: "https://i.imgur.com/JXDbAfl.png",
    alt: "Vantage Apex Legends",
    name: "Vantage",
    price: 555,
    etsyLink:
      "https://www.etsy.com/listing/1282151479/apex-legends-health-bar-overlay-vantage?click_key=fdefda55fecc4a6555cc16f30199e547dc8127d2%3A1282151479&click_sum=1dce8d8e&ref=shop_home_active_4&sts=1",
    redBubbleLink: "",
    quote: "I was born ready, so I don't know what 'not ready' is.",
    description: `Xiomara “Mara” Contreras was born and raised alone on the wild ice planet Págos by her survivalist mother, Xenia. Mara proved gifted with a sniper rifle from the moment she was big enough to look through the scope and reach the trigger. `,
  },
];

export default images;
