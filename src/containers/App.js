import { connect } from "react-redux";
import App from "../components/App";
import { fetchRepositoryDataOnLoad } from "../actions/bootstrap";

const mapDispatchToProps = dispatch => ({
  onAppLoaded: () => dispatch(fetchRepositoryDataOnLoad())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
