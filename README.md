# Traffic Catalog :speedboat: :car: :airplane:
Traffic/transportation catalog prototype SPA.

## :checkered_flag: Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
To run this project locally, you need NodeJS and npm installed.

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

## :point_right: Assumptions
- Remove service API returns the result set in bulk and does not handle neither pagination nor filtering.
- Incoming data in properly formatted and consistent. The format provided in the instruction was assumed to be a mock API (contract) between the present client-side app and the remote service API.

## :rocket: Features:
- Filter results as instructed and show total results.
- Filter inputs change based on results.
- Data retrieval error handling
- Full synchronization with browser history: search params reflect in the query string portion.
E.g. /search?colors[]=black&types[]=airplane
- Pagination support baked-in, with a pageSize of 5 (currently hardcoded in application state).
- Internationalization/Translations

## :point_up: Short term Improvements
- Increase code coverage
- Track down all hardcoded text and use translation keys instead

## :pray: Long term Improvements:
- Include pagination (pageSize, page) in the Url.
- Add "Order by" criteria
- Move locale/language to global application state: currently EN (English) hardcoded
- Add support for CI (continuous integration)

## Built On Top Of

* [ReactJS](https://reactjs.org/docs) - The view library used
* [Redux](https://redux.js.org/) - The state management library used
* [Create React App](https://github.com/facebook/create-react-app) - The boilerplate used

## License

This project is licensed under the MIT License.
