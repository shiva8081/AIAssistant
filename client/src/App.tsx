
import './App.css'
import Home from './home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import { usecontext } from './context/UserContext'
function App() {
  const {Authuser}=usecontext();
  console.log(Authuser)

  return (
    <>
      <Routes>
        <Route path="/" element={Authuser ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
