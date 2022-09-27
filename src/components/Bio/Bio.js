import { Link } from "react-router-dom";
import "./Bio.css";

const Bio = () => {
  return (
    <div id="bio">
      <div id="bio-img-div">
        <div>
          <img
            id="profile-pic-shades"
            src="/profile-pic-shades.png"
            alt="Justin Oeftger in shades"
          />
        </div>
      </div>
      <div id="bio-content-div">
        <div id="bio-content-title-div">
          <div>
            <h1>The Artist</h1>
            <h2>Justin Oeftger</h2>
          </div>
          <div>
            <button>Portfolio</button>
          </div>
        </div>
        <p>
          An artist with a passion for design. Justin always was attracted
          unique fine tuned art styles. His career led him into graphic design
          including branding, advertising and even some motion design. The
          common playful style seen in Limin Square developed after learning the
          new software Affinity Designer.
        </p>
        <p>
          Limin Square started as a fun outlet for artwork unrelated to his
          graphic design career projects. The origin of “Limin” was a made up
          word with no meaning attached to it and had an interesting ring to it
          or so at first. But later was found out that the word is used in the
          Caribbean to mean hanging out, relaxing, or taking it easy. You
          usually limin with friends, or hang out with friends. So Limin Square
          was born, “A place to hang out with friends”.
        </p>
        <p>
          Someone ask why the thick lines in the artwork. His answer was “in
          most art work, lines are just a clean division of colors but in my
          work the lines become part of the design, part of the artwork.”
          Because of his background in logo work his designs have been catered
          to look good even at small scale especially with the thick line work.
        </p>
        <div>
          <button id="hide-on-big-screen">Portfolio</button>
        </div>
      </div>
    </div>
  );
};

export default Bio;
