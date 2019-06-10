import React from "react";

const StatusFilter = ({ value, onChange }) => {
  return (
    <div>
      <label>Status</label>
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option value="open">Open</option>
        <option value="closed">Closed</option>
        <option value="all">All</option>
      </select>
    </div>
  );
};

export default StatusFilter;
