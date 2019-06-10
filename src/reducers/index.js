import { combineReducers } from "redux";
import repository from "./repository";
import issues from "./issues";
import labels from "./labels";
import assignees from "./assignees";

export default combineReducers({
  repository,
  issues,
  labels,
  assignees
});
