import axios from "axios";
import { useState, useEffect } from "react";

function ReactComponent({ projects }) {
  const [react, setReact] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/react").then((response) => {
      setReact(response.data);
    });
  }, []);

  const matchingProjects = projects.filter((project) =>
    react.some((r) => Number(r.projectId) === Number(project.id))
  );

  const handleSelectChange = (e) => {
    setSelectedProjectId(e.target.value === "null" ? null : e.target.value);
  };

  const filteredReactData = selectedProjectId
    ? react.filter((data) => data.projectId === Number(selectedProjectId))
    : react.filter((data) => data.projectId === null);

  return (
    <div className="body-react">
      <h3
        className="font-bold text-lg"
        style={{ textAlign: "center", fontSize: "30px", margin: "24px" }}
      >
        React
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "24px",
        }}
      >
        <select
          className="select select-ghost w-full max-w-xs"
          onChange={handleSelectChange}
        >
          <option value="null" disabled selected>
            Pick a project
          </option>
          {matchingProjects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {filteredReactData.map((data) => (
          <div
            key={data.id}
            style={{
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <p>{data.description}</p>
            <div
              className="mockup-code"
              style={{ height: "65vh", overflowY: "auto", overflowX: "auto" }}
            >
              {data.code.split("\n").map((line, index) => (
                <pre key={index} data-prefix={index + 1}>
                  <code>{line}</code>
                </pre>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactComponent;
