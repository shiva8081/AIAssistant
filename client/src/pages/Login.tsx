
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const googleLogin = (): void => {
        window.open("http://localhost:5001/auth/google", "_self");
        navigate("/");
    }
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-6 rounded-lg shadow-md transition  ease-in-out flex items-center" onClick={googleLogin}>Login</button>
    </div>
  )
}

export default Login
