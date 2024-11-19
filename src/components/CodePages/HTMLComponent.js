import { useState, useEffect } from "react";
import service from "../../services";

function HTMLComponent({ projects, langId }) {
  const [html, setHtml] = useState([]);

  useEffect(() => {
    const fetchCodeByLangId = async () => {
      try {
        const data = await service.getCodeSamplesByLangId(langId);
        setHtml(data);
      } catch (error) {
        console.error("Error fetching code samples:", error);
        setHtml([]);
      }
    };

    if (langId) fetchCodeByLangId();
  }, [langId]);

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
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "16px",
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
              style={{ maxHeight: "65vh", overflowY: "auto" }}
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

export default HTMLComponent;
