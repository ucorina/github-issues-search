import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "react-select";
import classes from "./AssigneeFilter.module.css";

const AssigneeFilter = ({ assignees, value, onChange, isLoading }) => {
  const selectStyles = {
    input: styles => ({ ...styles, width: "16em" })
  };
  const options = assignees.map(user => ({
    value: user.login,
    label: (
      <span key={user.login}>
        <img
          src={user.avatar_url}
          alt={user.login}
          style={{ borderRadius: "50%", width: "20px", marginRight: "10px" }}
        />
        {user.login}
      </span>
    )
  }));
  return (
    <FormControl>
      <Select
        value={options.find(option => option.value === value)}
        className={classes.select}
        onChange={item => (item ? onChange(item.value) : onChange(null))}
        TextFieldProps={{
          label: "Assignee",
          placeholder: "Search a country (start with a)"
        }}
        style={selectStyles}
        options={options}
        isSearchable
        isClearable
        isLoading={isLoading}
      />
    </FormControl>
  );
};

export default AssigneeFilter;
