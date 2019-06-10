import React from "react";
import Issue from "../Issue";
import styles from "./IssuesList.module.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

const IssuesList = ({ issues, isLoading, errorMessage }) => {
  if (isLoading) {
    return <Paper className={styles.messageContainer}>Loading ... </Paper>;
  }

  if (errorMessage) {
    return <Paper className={styles.messageContainer}>{errorMessage}</Paper>;
  }

  return (
    <Paper className={styles.container}>
      <Table>
        <TableBody>
          {issues.map(issue => (
            <Issue key={issue.id} {...issue} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default IssuesList;
