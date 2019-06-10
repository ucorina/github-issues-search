import { connect } from "react-redux";
import AssigneeFilter from "../../components/FiltersBar/filters/AssigneeFilter";

const mapStateToProps = state => ({
  assignees: state.assignees.data,
  isLoading: state.assignees.isLoading,
  errorMessage: state.assignees.errorMessage
});

export default connect(
  mapStateToProps,
  null
)(AssigneeFilter);
