import { combineReducers } from "redux";
import repository from "./repository";
import issues from "./issues";
import labels from "./labels";

export default combineReducers({
  repository,
  issues,
  labels
});
