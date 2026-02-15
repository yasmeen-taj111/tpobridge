import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");

  const submit = e => {
    e.preventDefault();
    alert("Registered Successfully");
    nav("/login");
  };

  return (
    <div className="auth">
      <form onSubmit={submit} className="authCard">
        <h2>Register</h2>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" />
        <button>Register</button>
        <p>Already user? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}
