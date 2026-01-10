import "../styles/filters.css";

export default function Filters({ status, setStatus }) {
  return (
    <select
      className="filter"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="">All statuses</option>
      <option value="Draft">Draft</option>
      <option value="Submitted">Submitted</option>
      <option value="Published">Published</option>
    </select>
  );
}
