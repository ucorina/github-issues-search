import { connect } from "react-redux";
import IssuesList from "../components/IssuesList";

const mapStateToProps = state => ({
  issues: state.issues.issues
});

export default connect(
  mapStateToProps,
  null
)(IssuesList);
