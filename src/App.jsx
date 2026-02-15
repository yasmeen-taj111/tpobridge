import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import RecruiterCRM from "./pages/RecruiterCRM";
import Inbound from "./pages/Inbound";
import Drives from "./pages/Drives";
import Owner from "./pages/Owner";
import Admin from "./pages/Admin";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crm" element={<RecruiterCRM />} />
          <Route path="/inbound" element={<Inbound />} />
          <Route path="/drives" element={<Drives />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}