import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import IssueLabel from "../../../components/IssueLabel";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const LabelsFilter = ({ labels, value = "", onChange }) => {
  return (
    <FormControl>
      <InputLabel>Labels</InputLabel>
      <Select
        multiple
        value={value !== "" ? value.split(",") : []}
        onChange={e => {
          onChange(e.target.value.join(","));
        }}
        style={{ width: "16em" }}
        renderValue={selected => (
          <div>
            {selected.map(labelName => {
              if (labelName === "") {
                return null;
              }
              const label = labels.find(label => label.name === labelName);
              return <IssueLabel key={labelName} label={label} />;
            })}
          </div>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
              width: 250
            }
          }
        }}
      >
        {labels.map(label => (
          <MenuItem key={label.name} value={label.name}>
            <IssueLabel label={label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LabelsFilter;
