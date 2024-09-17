

const Login = () => {
    const googleLogin = (): void => {
        window.open("http://localhost:5000/auth/google", "_self")
    }
  return (
    <div>
      <button onClick={googleLogin}>Login</button>
    </div>
  )
}

export default Login
