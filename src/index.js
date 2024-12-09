import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import "./index.css"; // Import Tailwind styles
import App from "./App";

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);