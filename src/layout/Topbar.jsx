import { useAuth } from "../auth/AuthContext";

export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <div className="topbar">
      <input className="search" placeholder="Search companies, drives..." />
      <div>
        {user}
        <button onClick={logout} className="logout">Logout</button>
      </div>
    </div>
  );
}