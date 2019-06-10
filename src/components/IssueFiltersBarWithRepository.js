import React, { Component } from "react";
import RepositorySelector from "./RepositorySelector";
import IssueFiltersBar from "./FiltersBar/IssueFiltersBar";

class IssueFiltersBarWithRepository extends Component {
  state = {
    owner: this.props.initialOwner,
    repository: this.props.initialRepository,
    filterValues: this.props.initialFilterValues
  };
  handleRepositoryChanged = ({ owner, repository }) => {
    this.setState({ owner, repository });
  };
  handleFilterValuesChanged = filterValues => {
    this.setState({ filterValues });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (JSON.stringify(this.state) !== JSON.stringify(prevState)) {
      this.props.onFiltersChanged(this.state);
    }
  };
  render() {
    return (
      <div>
        <RepositorySelector
          initialOwner={this.props.initialOwner}
          initialRepository={this.props.initialRepository}
          onRepositorySelected={this.handleRepositoryChanged}
        />
        <IssueFiltersBar
          initialFilterValues={this.props.initialFilterValues}
          onFiltersChanged={this.handleFilterValuesChanged}
        />
      </div>
    );
  }
}
export default IssueFiltersBarWithRepository;
