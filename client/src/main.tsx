import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  </StrictMode>
);
