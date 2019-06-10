import React, { Component } from "react";
import "./App.css";
import IssuesList from "../../containers/IssuesList";
import RepositorySelector from "../../containers/RepositorySelector";
class App extends Component {
  componentDidMount() {
    this.props.onAppLoaded();
  }
  render() {
    return (
      <div className="App">
        <h1>Github issues search</h1>
        <RepositorySelector />
        <IssuesList />
      </div>
    );
  }
}

export default App;
