import React from "react";
import styles from "./Issue.module.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Issue = ({ number, title, labels, created_at, user, milestone }) => {
  return (
    <TableRow>
      <TableCell>
        <div className={styles.titleContainer}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.labelContainer}>
            {labels.map(label => (
              <span
                key={label.id}
                className={styles.issueLabel}
                style={{ backgroundColor: `#${label.color}` }}
              >
                {label.name}
              </span>
            ))}
          </span>
        </div>
        <div className={styles.issueDetails}>
          <span>
            #{number} opened {created_at} by {user.login}
          </span>
          <span>{milestone}</span>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Issue;
