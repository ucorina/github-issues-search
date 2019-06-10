import React from "react";
import Issue from "../Issue";
import styles from "./IssuesList.module.css";

const IssuesList = ({ issues, isLoading, errorMessage }) => {
  if (isLoading) {
    return <div className={styles.container}>Loading ... </div>;
  }

  if (errorMessage) {
    return <div className={styles.container}>{errorMessage}</div>;
  }

  return (
    <div className={styles.container}>
      {issues.map(issue => (
        <Issue key={issue.id} {...issue} />
      ))}
    </div>
  );
};

export default IssuesList;
