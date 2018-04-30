# Getting started
## Initial setup and build

With a fresh repository, this will get the application compiled and running on Expo:

```
// Install dependencies
yarn install
// Compile TypeScript
yarn tsc
// Run tests
yarn test
// Build & start Expo
yarn start
// Follow instructions to open app in Expo
```

## Developing

In seperate processes you will want to run the following:

```
// Watch filesystem and recompile TypeScript on changes
yarn tsc -- --watch

// Watch filesystem and rerun tests on changes
yarn test -- --watch

// Watch filesystem and rebuild app / reload Expo on changes
yarn start

// Run the linter style checker (our linting rules are still evolving)
yarn lint
```
