import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiJavascript,
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <div className="tech-icons-wrapper">
      <div className="tech-icons">
        <SiJavascript />
      </div>
      <div className="tech-icons">
        <DiNodejs />
      </div>
      <div className="tech-icons">
        <DiReact />
      </div>
      <div className="tech-icons">
        <SiSolidity />
      </div>
      <div className="tech-icons">
        <DiMongodb />
      </div>
      <div className="tech-icons">
        <SiNextdotjs />
      </div>
      <div className="tech-icons">
        <DiGit />
      </div>
      <div className="tech-icons">
        <SiFirebase />
      </div>
      <div className="tech-icons">
        <SiRedis />
      </div>
      <div className="tech-icons">
        <SiPostgresql />
      </div>
      <div className="tech-icons">
        <DiPython />
      </div>
      <div className="tech-icons">
        <DiJava />
      </div>
    </div>
  );
}

export default Techstack;
