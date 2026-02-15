import KPI from "../components/KPI";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div>
      <div className="grid">
        <KPI title="Recruiters" value="120" />
        <KPI title="Active Pipeline" value="34" />
        <KPI title="Drives" value="8" />
        <KPI title="Offers" value="56" />
        <KPI title="DOJ" value="41" />
      </div>

      <div className="grid2">
        <Card title="Recent Activity">
          <ul>
            <li>Company updated drive</li>
            <li>New round added</li>
            <li>Results uploaded</li>
          </ul>
        </Card>

        <Card title="Alerts">
          <ul>
            <li className="red">3 recruiters inactive</li>
            <li className="yellow">5 followups pending</li>
            <li className="green">Drive completed</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
