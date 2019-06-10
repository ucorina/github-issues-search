import React from "react";
import FiltersBar from "./FiltersBar";
import { FILTER_TYPE } from "../../constants/filters";

const IssueFiltersBar = ({ initialFilterValues, onFiltersChanged }) => {
  return (
    <FiltersBar
      filterWidgets={[
        { name: "state", type: FILTER_TYPE.STATUS },
        { name: "labels", type: FILTER_TYPE.LABELS }
      ]}
      onFiltersChanged={onFiltersChanged}
      initialFilterValues={initialFilterValues}
    />
  );
};

export default IssueFiltersBar;
