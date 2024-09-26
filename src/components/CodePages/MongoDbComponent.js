import { useState, useEffect } from "react";
import service from "../../services";

function MongoDBComponent({ projects }) {
    const [mongoDb, setMongoDb] = useState([]);

    useEffect(() => {
      console.log("effect");
      service.getMongoDb().then((response) => {
        console.log("promise fulfilled");
        setMongoDb(response);
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
      <div className="body-mongoDb">
        <h3
          className="font-bold text-lg"
          style={{ textAlign: "center", fontSize: "30px", margin: "24px" }}
        >
          MongoDB
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          {mongoDb.map((data) => (
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
                  maxHeight: "65vh",
                  overflowY: "auto",
                  whiteSpace: "pre",
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
  export default MongoDBComponent;