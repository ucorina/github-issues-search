import { connect } from "react-redux";
import App from "../components/App";
import { fetchDefaulIssuesOnLoad } from "../actions/issues";

const mapDispatchToProps = dispatch => ({
  onAppLoaded: () => dispatch(fetchDefaulIssuesOnLoad())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
