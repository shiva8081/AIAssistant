import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { PdfProvider } from "./context/PdfContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <PdfProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </PdfProvider>
    </UserProvider>
  </StrictMode>
);
