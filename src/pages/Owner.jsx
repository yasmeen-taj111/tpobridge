import KPI from "../components/KPI";

export default function Owner() {
  return (
    <div>
      <h2>Owner Dashboard</h2>
      <div className="grid">
        <KPI title="Companies" value="220" />
        <KPI title="Drives" value="41" />
        <KPI title="Offers" value="310" />
        <KPI title="Median CTC" value="8.5 LPA" />
      </div>
    </div>
  );
}