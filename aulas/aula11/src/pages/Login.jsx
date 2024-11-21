import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { Login } = useContext(AuthContext)
  return (
    <>
      <h1>Login</h1>
      <button onClick={(e) => { Login({ email: "vitor@gmai.com", senha: "12345" }) }}>Entrar</button>
    </>
  );
}

export default Login;