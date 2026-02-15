import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = e => {
    e.preventDefault();
    login(email);
    nav("/dashboard");
  };

  return (
    <div className="auth">
      <form onSubmit={submit} className="authCard">
        <h2>Login</h2>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>New user? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}