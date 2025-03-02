import GitHubCalendar from "react-github-calendar";
function Github() {
  return (
    <div className="github-calender">
      <h1 className="project-heading">
        Days I <strong className="primary">Code</strong>
      </h1>
      <GitHubCalendar
        username="nilesh0627"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
