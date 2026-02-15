import { Link } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    ["Dashboard", "/dashboard"],
    ["Recruiter CRM", "/crm"],
    ["Inbound Intents", "/inbound"],
    ["Drive Manager", "/drives"],
    ["Owner View", "/owner"],
    ["Admin Panel", "/admin"]
  ];

  return (
    <div className="sidebar">
      <h2 className="logo">TPOBridge</h2>
      {menu.map(([name, path]) => (
        <Link key={path} to={path} className="nav">
          {name}
        </Link>
      ))}
    </div>
  );
}
