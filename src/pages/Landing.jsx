import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <h1>Placement Office Operating System</h1>
      <p>Structured. Professional. Data‑Driven.</p>
      <div className="cta">
        <Link to="/dashboard" className="btn">Start Trial</Link>
        <button className="btn secondary">Book Demo</button>
      </div>
    </div>
  );
}