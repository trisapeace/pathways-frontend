Pathways Web Frontend
==========

Web interface for the Pathways application, which helps people to find human services according to their needs. This is a single-page application written with React. It fetches data from [the backend API](https://github.com/pg-irc/pathways-backend).

 * Github project: <https://github.com/pg-irc/pathways-frontend>

Build environment
-----

Application dependencies are managed using yarn or npm. Ideally, please use [Yarn](https://yarnpkg.com). This ensures you will be using use the yarn.lock file.

Install package dependencies:

     yarn install

Development
-----

To create a development build, you must add a configuration file that says how to access the API:

    cp config/env.example.js config/development.js
    open config/development.js

Then, use the provided "start" script to launch a server with the frontend application:

    yarn run start

This script uses [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html). As long as it is running, you can access the application at <http://localhost:8080>. It will rebuild automatically as you work.

The application's code is located in the "src" directory. Please maintain consistent formatting, and make sure your editor uses settings from the [editorconfig](http://editorconfig.org/) file at the root of the repository.

Release
-----

To create a production build, add another configuration file that says how to access the production version of the API:

    cp config/env.example.js config/production.js
    open config/production.js

Then, use the provided "release" script:

    yarn run release

The result will be placed in the "out" directory.

Authors
-----

 * Dylan McCall <dylan@affinitybridge.com>
