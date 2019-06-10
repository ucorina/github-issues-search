# Github Issues search

Allows users to search a repository's issues using point and click filters instead of the query textbox Github comes with.

Currently supports only "State", "Labels" and "Assignee" filters. 

Tech stack:

* React, Redux
* Redux Thunk
* Material UI 
* react-select

Todos:

* [ ] Use `react-select` for the "Labels" filter as well (as this one now uses Material UI Select and the "Assignee" uses react-select)
* [ ] Make sure styling across all filters is consistent (current styling of the "Assignee" filter is different from the other ones)
* [ ] Add filters for "Milestone", "Creator" etc.