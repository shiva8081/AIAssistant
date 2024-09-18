import "./App.css";
import Home from "./home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./pages/Navbar";
import LoginHome from "./home/LoginHome";
import { usecontext } from "./context/UserContext";
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
        <Route path="/login" element={Authuser ? <Navigate to="/" /> : <LoginHome />} />
      </Routes>
    </>
  );
}

export default App;
