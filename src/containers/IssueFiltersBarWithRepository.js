import { connect } from "react-redux";
import IssueFiltersBarWithRepository from "../components/IssueFiltersBarWithRepository";
import { fetchIssues } from "../actions/issues";

const mapStateToProps = state => ({
  initialFilterValues: state.issues.query,
  initialOwner: state.repository.owner,
  initialRepository: state.repository.repository
});

const mapDispatchToProps = dispatch => ({
  onFiltersChanged: ({ filterValues, owner, repository }) => {
    dispatch(
      fetchIssues({
        query: filterValues,
        owner: owner,
        repository: repository
      })
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueFiltersBarWithRepository);
