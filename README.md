# Bello RN App
[![Build Status](https://travis-ci.org/adhywiranata/bello-client-rn.svg?branch=master)](https://travis-ci.org/adhywiranata/bello-client-rn)
[![dependencies Status](https://david-dm.org/adhywiranata/bello-client-rn/status.png)](https://david-dm.org/adhywiranata/bello-client-rn)

## Setup ✈️

### Installation 🔧

to install this project on your local development machine, make sure you have node.js minimum version of 6, and npm/yarn to run scripts (of course you do have npm 😬).

### Starting Out ⏰

to start the project's development server (to update the js bundle), simply use npm/yarn start. You won't be needing this on OSX, since the packager will automatically be prompted when you start debugging on your device.

```
yarn start
```

### Debugging on Device/Emulator 👷

For now, the app only fully supports Android, although it will work just fine on iOS, with several design aspect limitations and quirks.

```
react-native run-android
```

## Development 🔧

### Testing 👷

This app uses jest to run snapshot test for React Native and unit test for Redux, as well as integration tests for API integration.

```
yarn test
```

### Lint 📓

This app uses Airbnb as Eslint preset, and Flowtype plugin since we're using Flow.

```
yarn run lint
```

### Flow 🌄

This app uses facebook's Flow to ensure app's predictability. __always__ run this before deploying.

```
yarn run flow
```

### Built With 🔗

- [React Native](https://github.com/adhywiranata/bello-client-rn)
- [Redux](https://github.com/adhywiranata/bello-client-rn)
- [React Native Router Flux](https://github.com/adhywiranata/bello-client-rn)
- [React Native SVG](https://github.com/adhywiranata/bello-client-rn)
- [Jest](https://github.com/adhywiranata/bello-client-rn)
- [Flow](https://github.com/adhywiranata/bello-client-rn)
- [Moment.js](https://github.com/adhywiranata/bello-client-rn)
- [Numeral.js](https://github.com/adhywiranata/bello-client-rn)
