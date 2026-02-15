import { Link } from "react-router-dom";
export default function Landing() {
  return (<div className="landing"><h1>Placement Office Operating System</h1><p>Structured. Professional. Data‑Driven.</p><div className="cta"><Link to="/login" className="btn">Login</Link><Link to="/register" className="btn secondary">Register</Link></div></div>);
}