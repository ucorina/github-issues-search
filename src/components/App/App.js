import React, { Component } from "react";
import "./App.css";
import IssuesList from "../../containers/IssuesList";
import IssueFiltersBarWithRepository from "../../containers/IssueFiltersBarWithRepository";

class App extends Component {
  componentDidMount() {
    this.props.onAppLoaded();
  }
  render() {
    return (
      <div className="App">
        <h1>Github issues search</h1>
        <IssueFiltersBarWithRepository />
        <IssuesList />
      </div>
    );
  }
}

export default App;
