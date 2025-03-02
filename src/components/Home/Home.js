import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Intro from "./Intro";
import Type from "./Type";

function Home() {
  return (
    <>
      <article className="home-section" id="home">
        <Particle />
        <article className="home-content">
          <div className="home-header">
            <h1 className="heading">
              I'M
              <strong className="primary"> Nilesh Mishra</strong>
            </h1>

            <h1 className="heading">Building <div className="primary">Scalable Products</div>with Precision</h1>
            <div className="heading-details">
              Crafting Seamless UIs, Optimizing Performance, and Elevating User Experiences with <span className="primary">5+ Years</span> of Expertise in Scalable Frontend Development.</div>
            <div className="type-container">
              <h1 className="heading">Tech Stack: </h1>
              <Type />
            </div>
          </div>
          <img
            src={homeLogo}
            alt="home pic"
            className="img-fluid"
          />
        </article>
      </article>
      <Intro />
    </>
  );
}

export default Home;
