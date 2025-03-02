import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { WORK_EXPERIENCE } from "../../Constants/Experience";

function Experience() {
  return (
    <div className="about-section">
      <Particle />
      <div className="work-experience">
        <h1>Work <span className="primary">Experience</span></h1>

        <Stepper orientation="vertical">
          {WORK_EXPERIENCE.map((job, index) => (
            <Step key={index} active={true}>
              <StepLabel className="experience-label">
                <div className="sub-header">{job.role} at <span className="primary">{job.company}</span></div>
                <div className="secondary">{job.duration}</div>
              </StepLabel>
              <StepContent>
                <ul className="experience-description">
                  {
                    job.workList.map(work => <li key={work.name}>
                      <b>{work.name} </b>
                      <span> {work.description}</span>
                    </li>)
                  }
                </ul>
                <ul className="experience-skills">
                  {
                    job.skills.map(skill => <span key={skill} className="skill">
                      {skill}
                    </span>)
                  }
                </ul>
              </StepContent>
            </Step>
          ))}
        </Stepper>

      </div>
      <div className="about-me-wrapper">
        <div>
          <h1>
            Know Who <strong className="primary">I'M</strong>
          </h1>
          <Aboutcard />
        </div>
        <div
          className="about-img"
        >
          <img src={laptopImg} alt="about" className="img-fluid" />
        </div>
      </div>
      <h1 className="project-heading">
        Professional <strong className="primary">Skillset </strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className="primary">Tools</strong> I use
      </h1>
      <Toolstack />

      <Github />
    </div>
  );
}

export default Experience;
