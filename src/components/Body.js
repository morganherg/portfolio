import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import "../App.css";

import ReactComponent from "./CodePages/ReactComponent";
import AngularComponent from "./CodePages/AngularComponent";
import PythonComponent from "./CodePages/PythonComponent";
import DotNetComponent from "./CodePages/DotNetComponent";
import HTMLComponent from "./CodePages/HTMLComponent";
import TestingComponent from "./CodePages/TestingComponent";
import SqlComponent from "./CodePages/SqlComponent";
import MongoDBComponent from "./CodePages/MongoDbComponent";

function Body() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [project, setProject] = useState([]);
  const [codeLang, setCodeLang] = useState([]);
  const [selectedLangId, setSelectedLangId] = useState(null); // New state to hold the selected language Id

  useEffect(() => {
    const getProjects = async () => {
      const { data, error } = await supabase.from("projects").select();
      if (error) {
        console.error("Supabase error:", error);
        setProject([]);
      } else {
        setProject(data);
      }
    };

    const getCodingLanguage = async () => {
      const { data, error } = await supabase.from("codingLanguage").select();
      if (error) {
        console.error("Supabase error:", error);
        setCodeLang([]);
      } else {
        const sortedData = data.sort((a, b) => {
          const tierOrder = { Frontend: 1, "Middle/Backend": 2, Backend: 3 };
          const tierA = tierOrder[a.Tier] || 4;
          const tierB = tierOrder[b.Tier] || 4;

          if (tierA === tierB) {
            return a.langName.localeCompare(b.langName);
          }
          return tierA - tierB;
        });
        setCodeLang(sortedData);
      }
    };

    getProjects();
    getCodingLanguage();
  }, []);

  // Updated renderComponent function to pass the selected language Id as a prop
  const renderComponent = () => {
    switch (selectedComponent) {
      case "React":
        return <ReactComponent projects={project} langId={selectedLangId} />;
      case "Angular":
        return <AngularComponent langId={selectedLangId} />;
      case "Python":
        return <PythonComponent langId={selectedLangId} />;
      case "C#/.Net":
        return <DotNetComponent projects={project} langId={selectedLangId} />;
      case "HTML":
        return <HTMLComponent projects={project} langId={selectedLangId} />;
      case "Testing":
        return <TestingComponent langId={selectedLangId} />;
      case "SQL/PostgreSQL":
        return <SqlComponent projects={project} langId={selectedLangId} />;
      case "MongoDB":
        return <MongoDBComponent projects={project} langId={selectedLangId} />;
      default:
        return (
          <p style={{ textAlign: "center" }}>
            Select a button to see the code sample
          </p>
        );
    }
  };

  const colorClasses = ["btn-primary", "btn-secondary", "btn-accent"];

  return (
    <div className="App-Body">
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {codeLang.map((lang, index) => (
          <button
            key={index}
            className={`btn btn-active ${
              colorClasses[index % colorClasses.length]
            }`}
            onClick={() => {
              setSelectedComponent(lang.langName);
              setSelectedLangId(lang.id); // Set the selected language id
            }}
            disabled={!lang.isActive} // Disable button if isActive is false
          >
            {lang.langName}
          </button>
        ))}
      </div>
      <div
        style={{
          margin: "16px 100px",
        }}
      >
        {renderComponent()}
      </div>
    </div>
  );
}

export default Body;
