import { connect } from "react-redux";
import IssuesList from "../components/IssuesList";

const mapStateToProps = state => ({
  issues: state.issues.issues,
  isLoading: state.issues.isLoading,
  errorMessage: state.issues.errorMessage
});

export default connect(
  mapStateToProps,
  null
)(IssuesList);
