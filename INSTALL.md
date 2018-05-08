# Getting started


## Initial setup and build

With a fresh repository, this will get the application compiled and running on Expo:

    // Install dependencies
    yarn install
    // Compile TypeScript
    yarn tsc
    // Run tests
    yarn jest
    // Build & start Expo
    yarn start
    // Follow instructions to open app in Expo


## Developing

In seperate processes you will want to run the following:

    // Watch filesystem and recompile TypeScript on changes
    yarn tsc --watch

    // Watch filesystem and rerun tests on changes
    yarn jest --watch

    // Watch filesystem and rebuild app / reload Expo on changes
    yarn start


## Internationalization (i18n)

jsLingui provides some commands to help with i18n:

    // Add a new locale(s) (generate empty messages catalog(s) for each locale)
    yarn lingui add-locale [locales...]

    // Extract all strings from codebase into catalogs (per-locale messages.json files)
    yarn lingui extract [files...]

    // Compile messages catalogs into optimized & importable javascript modules
    yarn lingui compile --strict