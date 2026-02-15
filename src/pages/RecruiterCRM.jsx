import Table from "../components/Table";

export default function RecruiterCRM() {
  const headers = ["Company", "HR", "Last Contact", "Stage", "Next Followup"];
  const rows = [["Google", "Riya", "Jan 2", "Contacted", "Feb 1"], ["Amazon", "Arjun", "Jan 5", "Scheduled", "Feb 2"]];
  return (<div><h2>Recruiter CRM</h2><Table headers={headers} rows={rows} /></div>);
}
