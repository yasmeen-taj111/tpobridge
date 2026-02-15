import Table from "../components/Table";

export default function Drives() {
  const headers = [
    "Company",
    "Role",
    "Date",
    "Registrations",
    "Round",
    "Offers"
  ];
  const rows = [["Microsoft", "SWE", "Mar 12", 240, "Round 2", 12]];

  return (
    <div>
      <h2>Drive Manager</h2>
      <Table headers={headers} rows={rows} />
    </div>
  );
}