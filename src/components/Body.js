import React, { useState } from "react";
import "../App.css";

// Import your components
import ReactComponent from "./CodePages/ReactComponent";
import AngularComponent from "./CodePages/AngularComponent";
import PythonComponent from "./CodePages/PythonComponent";
import DotNetComponent from "./CodePages/DotNetComponent";
import HTMLComponent from "./CodePages/HTMLComponent";
import TestingComponent from "./CodePages/TestingComponent";

function Body() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "React":
        return <ReactComponent />;
      case "Angular":
        return <AngularComponent />;
      case "Python":
        return <PythonComponent />;
      case "DotNet":
        return <DotNetComponent />;
      case "HTML":
        return <HTMLComponent />;
      case "Testing":
        return <TestingComponent />;
      default:
        return <p>Select a button to see the code sample</p>;
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
        <button
          className="btn btn-active btn-primary"
          onClick={() => setSelectedComponent("React")}
        >
          React
        </button>
        <button
          className="btn btn-active btn-secondary"
          disabled="disabled"
          onClick={() => setSelectedComponent("Angular")}
        >
          Angular
        </button>
        <button
          className="btn btn-active btn-accent"
          disabled="disabled"
          onClick={() => setSelectedComponent("Python")}
        >
          Python
        </button>
        <button
          className="btn btn-active btn-primary"
          onClick={() => setSelectedComponent("DotNet")}
        >
          C#/.Net
        </button>
        <button
          className="btn btn-active btn-secondary"
          onClick={() => setSelectedComponent("HTML")}
        >
          HTML
        </button>
        <button
          className="btn btn-active btn-accent"
          disabled="disabled"
          onClick={() => setSelectedComponent("Testing")}
        >
          Testing
        </button>
      </div>
      <div style={{ marginTop: "16px" }}>{renderComponent()}</div>
    </div>
  );
}

export default Body;
