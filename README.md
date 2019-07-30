## NOTE

you can access the table page via that route: /users

## Task Description

Simple React, Redux table that fetches users' data from an API and shows them in that table, Form each user we can do a PUT request by toggling the status checkbox.

## Files Architecture

src/components/users/users.js
The main component which contains the table.

src/components/users/user.js
The component which show the row of each user.

src/store/actions/users.js
The file which contains users actions, fetching data and updating status

src/store/reducers/users.js
Users reducers
