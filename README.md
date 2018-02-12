# Traffic Catalog :steam_locomotive: :car: :airplane:
Traffic/transportation catalog prototype SPA.

## :checkered_flag: Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
To run this project locally, you need **NodeJS** and **npm** installed.

### Installing

```
npm install
```

Or

```
yarn install
```

## Running the tests
```
npm run test
```
Or
```
yarn test
```
## :office: Project Structure and Architecture
- We follow a standard structure for React/Redux single-page JS application.
- We call upon a small NodeJS app to serve the application in production environment.
- The application's global state is small and dry. 
All transformations needed to compute derived data (e.g. filtering records) are extracted to selectors.
- We use react-router package to pair the application with browser history, and a third-party middleware to sync the browser history with application state.

## :point_right: Assumptions
We assume the following:
- The remote service API (backend) returns the result-set in one shot and does not handle neither pagination nor filtering.
- Incoming data is properly formatted and consistent as per the format provided in the instructions.

## :rocket: Features:
- Filter results as instructed and show total results.
- Filter inputs change based on results.
- Data retrieval error handling
- Full synchronization with browser history: search params reflect in the query string portion for easier search sharing
E.g. /search?colors[]=black&types[]=airplane
- Pagination support, currently with a fixed pageSize of 5 (hardcoded in application state).
- Internationalization/Translations Support

## :point_up: Short term Improvements
- Increase code coverage
- Track down all hardcoded text and use translation keys instead

## :pray: Long term Improvements:
- Include pagination (pageSize, page) in the Url.
- Add "Order by" criteria
- Move locale/language to global application state: currently EN (English) hardcoded
- Add support for CI (continuous integration)

## :electric_plug: Built On Top Of

* [ReactJS](https://reactjs.org/docs) - The view library used
* [Redux](https://redux.js.org/) - The state management library used
* [Create React App](https://github.com/facebook/create-react-app) - The boilerplate used

## License

This project is licensed under the MIT License.
