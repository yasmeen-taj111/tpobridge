import Table from "../components/Table";
export default function Admin() {
  const headers = ["College", "Plan", "Users", "Drives", "Renewal"];
  const rows = [["UVCE", "Pro", 120, 30, "Dec 2026"]];
  return (<div><h2>Admin Panel</h2><Table headers={headers} rows={rows} /></div>);
}