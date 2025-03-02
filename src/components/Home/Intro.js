import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Tooltip } from "@mui/material";

function Intro() {
  return (
    <section className="home-about-section" id="about">
      <article className="about-myself">
        <span className="home-about-description">
          <h1 className="heading">
            LET ME <span className="primary"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            I fell in love with programming and over the years, I have refined my skills in building seamless, interactive, and efficient web experiences. I specialize in
            <i>
              <b className="primary"> Javascript.</b>
            </i>
            <br />
            <br />
            My focus is on developing  &nbsp;
            <i>
              <b className="primary">cutting-edge web technologies, scalable products, and staying ahead of industry trends. </b>
            </i>
            <br />
            <br />
            <i>
              Beyond UI development, I enjoy working on full-stack solutions with <b className="primary">Node.js</b>, translating intuitive designs into high-performance, user-centric applications. I constantly strive to push the boundaries of frontend engineering to create pixel-perfect, engaging digital experiences.
            </i>
          </p>
        </span>
        <span className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </span>
      </article>
      <div>
        <span className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="primary">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <Tooltip title="Github">
              <li className="social-icons">
                <a
                  href="https://github.com/nilesh0627"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </Tooltip>
            <Tooltip title="Linkedin">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nilesh0627/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </Tooltip>
          </ul>
        </span>
      </div>
    </section>
  );
}
export default Intro;
