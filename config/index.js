const merge = require('lodash.merge');
const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`);
module.exports = merge({}, {
    api: {
        protocol: 'https',
        hostname: 'pathways-backend.herokuapp.com',
        port: 443,
        auth: ''
    }
}, config);
