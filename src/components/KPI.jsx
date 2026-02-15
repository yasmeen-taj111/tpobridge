export default function KPI({ title, value }) {
  return (
    <div className="kpi">
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}