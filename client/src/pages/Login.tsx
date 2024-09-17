
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const googleLogin = (): void => {
        window.open("http://localhost:5000/auth/google", "_self");
        navigate("/");
    }
  return (
    <div>
      <button onClick={googleLogin}>Login</button>
    </div>
  )
}

export default Login
