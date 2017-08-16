Pathways Web Frontend
[![Build Status](https://travis-ci.org/pg-irc/pathways-frontend.svg?branch=master)](https://travis-ci.org/pg-irc/pathways-frontend)
==========

Web interface for the Pathways application, which helps people to find human services according to their needs. This is a single-page application written with React. It fetches data from [the backend API](https://github.com/pg-irc/pathways-backend).

 * Github project: <https://github.com/pg-irc/pathways-frontend>

**Find the live website [here](https://pathways-frontend.herokuapp.com)**

Build environment
-----

Application dependencies are managed using yarn or npm. Ideally, please use [Yarn](https://yarnpkg.com). This ensures you will be using use the yarn.lock file.

Install package dependencies:

     yarn install

To create a development build, you must include runtime configuration:

    cp config/example.js config/development.js
    open config/development.js

Development
-----

To launch a test server, use the provided "start" script:

    yarn run start

This script uses [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html). As long as it is running, you can access the application at <http://localhost:8080>. It will rebuild automatically as you work.

The application's code is located in the "src" directory. Please maintain consistent formatting, and use the [editorconfig](http://editorconfig.org/) file at the root of the repository.

Deployment
-----

To create a production build, use the provided "release" script:

    yarn run release

The result will be placed in the "out" directory.

Authors
-----

 * Dylan McCall <dylan@affinitybridge.com>
