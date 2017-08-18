const merge = require('lodash.merge');
const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`);

const DEFAULT_CONFIG = {
    api: {}
};

module.exports = merge({}, DEFAULT_CONFIG, config);
