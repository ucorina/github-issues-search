import { connect } from "react-redux";
import RepositorySelect from "../components/RepositorySelector";
import { fetchIssues } from "../actions/issues";

const mapStateToProps = state => ({
  initialOwner: state.issues.owner,
  initialRepository: state.issues.repository
});

const mapDispatchToProps = dispatch => ({
  onRepositorySelected: ({ owner, repository }) =>
    dispatch(fetchIssues({ owner, repository }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositorySelect);
