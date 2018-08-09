## Wines list built in ReactJs - XD

This is a interface built in Reactjs to show list of wines that are stored in `https://punkapi.com`.

## Features

### To do:
  - Search wines
  - Wines details
  - Add Redux
  - Add unittest

### Done:
  - List all wines

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  package.json
  yarn.lock
  yarn-error.log
  public/
  ├── favicon.ico
  ├── index.html
  └── manifest.json
  src
  ├── App.css
  ├── App.js
  ├── components
  │   ├── Api
  │   │   ├── ApiWineList.js
  │   │   └── ApiWineList.test.js
  │   ├── Loading.js
  │   ├── NotFound.js
  │   ├── Structure
  │   │   ├── content.css
  │   │   ├── Content.js
  │   │   ├── header.css
  │   │   ├── Header.js
  │   │   └── WineDetail.js
  │   ├── utils
  │   │   └── constants.js
  │   ├── WineList
  │   │   ├── WineList.css
  │   │   ├── WineList.js
  │   │   └── WineList.test.js
  │   └── WineListItem
  │       ├── wineListItem.css
  │       ├── WineListItem.js
  │       └── WineListItem.test.js
  ├── context
  │   └── ApiContext.js
  ├── index.css
  ├── index.js
  ├── logo.svg
  ├── registerServiceWorker.js
  └── Router.js

```

For the project to build, **these files must exist with exact filenames**:

## Available Scripts

In the project directory, you can run:

### `yarn` (To install packages)

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

