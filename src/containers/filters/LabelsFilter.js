import { connect } from "react-redux";
import LabelsFilter from "../../components/FiltersBar/filters/LabelsFilter";

const mapStateToProps = state => ({
  labels: state.labels.data,
  isLoading: state.issues.isLoading,
  errorMessage: state.issues.errorMessage
});

export default connect(
  mapStateToProps,
  null
)(LabelsFilter);
