import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./components/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  );
}, 1000);
