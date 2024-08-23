import axios from "axios";
import { useState, useEffect } from "react";

function HTMLComponent({ projects }) {
  const [html, setHtml] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/html").then((response) => {
      console.log("promise fulfilled");
      setHtml(response.data);
    });
  }, []);

  const getProjectName = (id) => {
    const numericId = Number(id);
    const project = projects.find(
      (project) => Number(project.id) === numericId
    );
    return project.name;
  };

  return (
    <div className="body-html">
      <h3
        className="font-bold text-lg"
        style={{ textAlign: "center", fontSize: "30px", margin: "24px" }}
      >
        HTML
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
        {html.map((data) => (
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
              style={{ height: "65vh", overflowY: "auto" }}
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

export default HTMLComponent;
