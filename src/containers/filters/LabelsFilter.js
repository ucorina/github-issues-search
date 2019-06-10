import { connect } from "react-redux";
import LabelsFilter from "../../components/FiltersBar/filters/LabelsFilter";

const mapStateToProps = state => ({
  labels: state.labels.data,
  isLoading: state.labels.isLoading,
  errorMessage: state.labels.errorMessage
});

export default connect(
  mapStateToProps,
  null
)(LabelsFilter);
