import React from "react";
import StatusFilter from "./StatusFilter";
import LabelsFilter from "../../../containers/filters/LabelsFilter";
import { FILTER_TYPE } from "../../../constants/filters";

const Filter = ({ type, ...props }) => {
  switch (type) {
    case FILTER_TYPE.STATUS:
      return <StatusFilter {...props} />;
    case FILTER_TYPE.LABELS:
      return <LabelsFilter {...props} />;
    default:
      return <div>Unkown filter {type}</div>;
  }
};

export default Filter;
