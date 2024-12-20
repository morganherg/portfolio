import { useState, useEffect } from "react";
import service from "../../services";

function MongoDBComponent({ projects, langId }) {
  const [mongoDb, setMongoDb] = useState([]);

  useEffect(() => {
    const fetchCodeByLangId = async () => {
      try {
        const data = await service.getCodeSamplesByLangId(langId);
        setMongoDb(data);
      } catch (error) {
        console.error("Error fetching code samples:", error);
        setMongoDb([]);
      }
    };

    if (langId) fetchCodeByLangId();
  }, [langId]);

  // const getProjectName = (id) => {
  //   const numericId = Number(id);
  //   const project = projects.find(
  //     (project) => Number(project.id) === numericId
  //   );
  //   return project ? project.name : "Unknown Project";
  // };

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
            <p>{data.description}</p>
            <div
              className="mockup-code"
              style={{
                maxHeight: "65vh",
                overflowY: "auto",
                whiteSpace: "pre",
              }}
            >
              {data.code.split("\\n").map((line, index) => (
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
