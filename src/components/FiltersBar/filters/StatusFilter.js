import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const StatusFilter = ({ value, onChange }) => {
  return (
    <FormControl>
      <InputLabel>Status</InputLabel>
      <Select value={value} onChange={e => onChange(e.target.value)}>
        <MenuItem value="open">Open</MenuItem>
        <MenuItem value="closed">Closed</MenuItem>
        <MenuItem value="all">All</MenuItem>
      </Select>
    </FormControl>
  );
};

export default StatusFilter;
