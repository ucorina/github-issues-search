import React from "react";
import styles from "./IssueLabel.module.css";

const IssueLabel = ({ label }) => (
  <span
    key={label.id}
    className={styles.label}
    style={{ backgroundColor: `#${label.color}` }}
  >
    {label.name}
  </span>
);

export default IssueLabel;
