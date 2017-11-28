# WhaleThen

> WhaleThen combines scheduling, trip planning, and group coordination on a single page. Vote, comment, have a whale of a time. Sea you soon!

## Team

  - Andy Nguyen
  - Angie Huang
  - Jackie Leung
  - Jenn Shen

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](https://trello.com/b/MelpBRkI)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

#### Starting Development Environment

Using the development server will also run and serve webpack. Only one terminal instance is needed. You'll also need to run mongodb server. 

Starting Development Server:
``` sh
npm run server-dev
```
#### WhaleThen's RESTful api

##### Get Requests

Timeline:
  - route: '/timeline/:timelineName/:timelineId'
  - Recommended to use Axios query string syntax or url template literals
  - response data will be on `data` key of the JSON object.
    - contains an array of event objects  

Search:
  - route: '/search'
  - Query string syntax (Axios query string syntax recommended)
  - Required parameters include category and location
  - response data will be on `data` key of the JSON object.
    - contains an array of event objects

##### Post Requests

Timeline:
  - route: '/timeline'
  - Data Object should contain keys `timelineName`, `timelineId`, and `numberOfDays`
  - status code 200 if successful
  - status code 409 if failure

Entry:
  - route: '/entry'
  - Data Object should contain keys `event`, `timelineId`, and `day`
  - Event should be in the form of an object
  - `timelineId` (String) should refer to timeline that event is to be added
  - `day` (Number) should refer to the day of which the event should be added

##### Put Requests

Entry:
  - route: '/entry'
  - Data object should contain `timelineId`, `day`, `eventId`, and `votes`

##### Delete Requests

Entry:
  - route: '/entry/:entryId'

## Requirements

  - axios: ^0.17.1,
  - babel-core: ^6.26.0,
  - bluebird: ^3.5.1,
  - body-parser: ^1.18.2,
  - cookie-parser: ^1.4.3,
  - cors: ^2.8.4,
  - dotenv: ^4.0.0,
  - express: ^4.16.2,
  - express-session: ^1.15.6,
  - jquery: ^3.2.1,
  - live-server: ^1.2.0,
  - lodash: ^4.17.4,
  - moment: ^2.19.2,
  - mongodb: ^2.2.33,
  - mongoose: ^4.13.2,
  - nodejs: 0.0.0,
  - nodemon: ^1.12.1,
  - passport: ^0.4.0,
  - path: ^0.12.7,
  - prop-types: ^15.6.0,
  - react: ^16.1.1,
  - react-dom: ^16.1.1,
  - request: ^2.83.0,
  - request-promise: ^4.2.2,
  - shortid: ^2.2.8
  - webpack-dev-middleware: ^1.12.2,
  - babel-loader: ^7.1.2",
  - webpack-hot-middleware: ^2.21.0


## Development

  - babel-cli: ^6.7.5,
  - babel-preset-es2015: ^6.24.1,
  - babel-preset-react: ^6.24.1,
  - babel-preset-stage-2: ^6.24.1,
  - babel-register: ^6.7.2,
  - eslint: ^4.11.0,
  - eslint-config-airbnb: ^16.1.0,
  - eslint-config-hackreactor: git://github.com/reactorcore/eslint-config-hackreactor,
  - eslint-plugin-import: ^2.8.0,
  - eslint-plugin-jsx-a11y: ^6.0.2,
  - eslint-plugin-react: ^7.4.0,
  - webpack: ^3.8.1,
  - webpack-dev-server: ^2.9.4

### Installing Dependencies

From within the root directory:

Installing dependencies:
```sh
npm install
```

### Roadmap

View the project roadmap [here](https://docs.google.com/document/d/1dB4A4rv8NQtyqARG1vik3n5isMQd3VrvWwGmWwvxZrs/edit?usp=sharing)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
