import Table from "../components/Table";

export default function Inbound() {
  const headers = ["Company", "Role", "CTC", "Date", "Status"];
  const rows = [["Infosys", "SDE", "12 LPA", "Mar 10", "New"]];

  return (
    <div>
      <h2>Inbound Intents</h2>
      <Table headers={headers} rows={rows} />
    </div>
  );
}