import React from "react";
import styles from "./Issue.module.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IssueLabel from "../IssueLabel";

const Issue = ({
  number,
  title,
  labels,
  created_at,
  user,
  milestone,
  assignee
}) => {
  return (
    <TableRow>
      <TableCell>
        <div className={styles.titleContainer}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.labelContainer}>
            {labels.map(label => (
              <IssueLabel key={label.id} label={label} />
            ))}
          </span>
        </div>
        <div className={styles.issueDetails}>
          <span>
            #{number} opened {created_at} by {user.login}, assigned to{" "}
            {assignee ? assignee.login : "no one"}
          </span>
          <span>{milestone}</span>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Issue;
