import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

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
        <CssBaseline />
        <main>
          <Container maxWidth="md">
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
              style={{ marginTop: "30px" }}
            >
              Github issues search
            </Typography>
            <IssueFiltersBarWithRepository />
            <IssuesList />
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
