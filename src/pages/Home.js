import InfiniteScrollBox from "../components/InfiniteScrollBox";
import "../styles/pageStyles/HomePage.css";

const Home = ({ images }) => {
  return (
    <div id="HomePage-div">
      <InfiniteScrollBox images={images} />
    </div>
  );
};

export default Home;
