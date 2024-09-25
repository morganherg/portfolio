import React, { useState, useEffect } from "react";
import "../App.css";

// Import your components
import ReactComponent from "./CodePages/ReactComponent";
import AngularComponent from "./CodePages/AngularComponent";
import PythonComponent from "./CodePages/PythonComponent";
import DotNetComponent from "./CodePages/DotNetComponent";
import HTMLComponent from "./CodePages/HTMLComponent";
import TestingComponent from "./CodePages/TestingComponent";
import service from "../services";

function Body() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [project, setProject] = useState([]);

  useEffect(() => {
    console.log("effect");
    service.getProjects().then((response) => {
      console.log("promise fulfilled");
      setProject(response);
    });
  }, []);

  // Array of button color classes to cycle through
  const colorClasses = ["btn-primary", "btn-secondary", "btn-accent"];

  // Array of button details (label and corresponding component key)
  const buttons = [
    { label: "HTML", component: "HTML" },
    { label: "React", component: "React" },
    { label: "Angular", component: "Angular", disabled: true },
    { label: "Python", component: "Python", disabled: true },
    { label: "C#/.Net", component: "DotNet" },
    { label: "SQL", component: "SQL", disabled: true },
    { label: "Testing", component: "Testing", disabled: true },
    // Add more buttons here if needed
  ];

  const renderComponent = () => {
    switch (selectedComponent) {
      case "React":
        return <ReactComponent projects={project} />;
      case "Angular":
        return <AngularComponent />;
      case "Python":
        return <PythonComponent />;
      case "DotNet":
        return <DotNetComponent projects={project} />;
      case "HTML":
        return <HTMLComponent projects={project} />;
      case "Testing":
        return <TestingComponent />;
      default:
        return (
          <p style={{ textAlign: "center" }}>
            Select a button to see the code sample
          </p>
        );
    }
  };

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
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`btn btn-active ${
              colorClasses[index % colorClasses.length]
            }`}
            onClick={() => setSelectedComponent(btn.component)}
            disabled={btn.disabled || false}
          >
            {btn.label}
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
