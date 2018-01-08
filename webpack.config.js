require('dotenv').config();

const BUILD_CONFIG = process.env.NODE_ENV || 'development';

module.exports = require(`./webpack.config.${BUILD_CONFIG}.js`);
