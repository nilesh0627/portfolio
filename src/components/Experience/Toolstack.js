import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="tech-icons-wrapper">
      <div className="tech-icons">
        <SiMacos />
      </div>
      <div className="tech-icons">
        <SiVisualstudiocode />
      </div>
      <div className="tech-icons">
        <SiPostman />
      </div>
      <div className="tech-icons">
        <SiSlack />
      </div>
      <div className="tech-icons">
        <SiVercel />
      </div>
    </div>
  );
}

export default Toolstack;
