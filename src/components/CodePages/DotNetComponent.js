import { useState, useEffect } from "react";
import service from "../../services";

function DotNetComponent({ projects }) {
  const [dotNet, setDotNet] = useState([]);

  useEffect(() => {
    console.log("effect");
    service.getDotNet().then((response) => {
      console.log("promise fulfilled");
      setDotNet(response);
    });
  }, []);

  const getProjectName = (id) => {
    const numericId = Number(id);
    const project = projects.find(
      (project) => Number(project.id) === numericId
    );
    return project ? project.name : "Unknown Project";
  };

  return (
    <div className="body-dotNet">
      <h3
        className="font-bold text-lg"
        style={{ textAlign: "center", fontSize: "30px", margin: "24px" }}
      >
        C#/.Net
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row", // Align items in a row
          flexWrap: "wrap", // Wrap items to the next line if needed
          gap: "16px", // Space between items
          justifyContent: "center",
        }}
      >
        {dotNet.map((data) => (
          <div
            key={data.id}
            style={{
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            {data.projectId && (
              <p>
                <b>Project: {getProjectName(data.projectId)}</b>
              </p>
            )}
            <p>{data.description}</p>
            <div
              className="mockup-code"
              style={{
                height: "65vh",
                overflowY: "auto",
                whiteSpace: "pre", // Ensure preformatted text stays intact
              }}
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

export default DotNetComponent;
