Pathways Web Frontend
[![Build Status](https://travis-ci.org/pg-irc/pathways-frontend.svg?branch=master)](https://travis-ci.org/pg-irc/pathways-frontend)
==========

Web interface for the Pathways application, which helps people to find human services according to their needs. This is a single-page application written with React. It fetches data from [the backend API](https://github.com/pg-irc/pathways-backend).

 * Github project: <https://github.com/pg-irc/pathways-frontend>

**Find the live website [here](https://pathways-frontend.herokuapp.com)**

Build environment
-----

Application dependencies are managed using npm.

Install package dependencies:

     npm install

Development
-----

To create a development build, you should add a local enviroment file named ".env" that specifies how to access the API:

    REACT_APP_CONFIG_API_URL='http://localhost:8000'

Then, use the provided "start" script to launch a server with the frontend application:

    npm run start

This script uses [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html). As long as it is running, you can access the application at <http://localhost:8080>. It will rebuild automatically as you work.

The application's code is located in the "src" directory. Please maintain consistent formatting, and make sure your editor uses settings from the [editorconfig](http://editorconfig.org/) file at the root of the repository.

Release
-----

To create a production build, add another configuration file that says how to access the production version of the API:

    cp config/env.example.js config/production.js
    open config/production.js

Then, use the provided "release" script:

    npm run release

The result will be placed in the "dist" directory.

Authors
-----

 * Dylan McCall <dylan@affinitybridge.com>
