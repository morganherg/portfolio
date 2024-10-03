import { useState, useEffect } from "react";
import supabase from "../../config/supabaseClient";


function HTMLComponent({ projects, langId }) {
  const [html, setHtml] = useState([]);

  useEffect(() => {
    console.log("effect");
    const fetchHtml = async () => {
      const { data, error } = await supabase
        .from("codeSamples")
        .select()
        .eq("codeId", langId);
      if (error) {
        console.error("Supabase error:", error);
        setHtml([]);
      }
      if (data) {
        console.log("dotNet data:", data);
        setHtml(data);
      }
    };
    fetchHtml();
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
