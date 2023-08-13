import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./assets/reset.css";
import "./assets/style.css";

import { UserProvider } from "./context/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <UserProvider>
   <App />
  </UserProvider>
 </React.StrictMode>
);
