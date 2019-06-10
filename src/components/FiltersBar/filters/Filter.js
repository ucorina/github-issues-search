import React from "react";
import StatusFilter from "./StatusFilter";
import LabelsFilter from "../../../containers/filters/LabelsFilter";
import AssigneeFilter from "../../../containers/filters/AssigneeFilter";
import { FILTER_TYPE } from "../../../constants/filters";

const Filter = ({ type, ...props }) => {
  switch (type) {
    case FILTER_TYPE.STATUS:
      return <StatusFilter {...props} />;
    case FILTER_TYPE.LABELS:
      return <LabelsFilter {...props} />;
    case FILTER_TYPE.ASSIGNEE:
      return <AssigneeFilter {...props} />;
    default:
      return <div>Unkown filter {type}</div>;
  }
};

export default Filter;
