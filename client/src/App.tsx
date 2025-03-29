import "./App.css";
import Home from "./home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./pages/Navbar";
import LoginHome from "./home/LoginHome";
import { usecontext } from "./context/UserContext";
import PdfChat from "./pages/PdfChat";
import TweetGenerator from "./components/TweetGenerator";

function App() {
  const { Authuser } = usecontext();
  console.log(Authuser);

  return (
    <>
      <Navbar Authuser={Authuser} />
      <Routes>
        <Route
          path="/"
          element={Authuser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={Authuser ? <Navigate to="/" /> : <LoginHome />}
        />
        <Route
          path="/pdfchat"
          element={Authuser ? <PdfChat /> : <Navigate to="/login" />}
        />
        <Route
          path="/tweet-generator"
          element={Authuser ? <TweetGenerator /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
