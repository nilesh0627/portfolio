import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <div className="quote-card-view">
      <blockquote>
        <p>
          Hi Everyone, I am <span className="primary">Nilesh Mishra </span>
          from <span className="primary"> Bangalore, India.</span>
          <br />
          I am currently employed as a software Engineer at ConcertAI.
          <br />
          I have completed B.Tech in Computer Science and Engineering from MAKAUT university, Kolkata.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">
            <FaHandPointRight color="#cd5ff8" /> Playing Sports like Cricket, Badminton etc.
          </li>
          <li className="about-activity">
            <FaHandPointRight color="#cd5ff8" /> Travelling
          </li>
        </ul>
        <i className="secondary">
          "Strive to build things that make a difference!"{" "}
        </i>
      </blockquote>
    </div>
  );
}

export default AboutCard;
