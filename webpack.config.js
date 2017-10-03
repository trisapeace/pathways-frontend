function config() {
    switch (process.env.NODE_ENV) {
        case 'production':
            return 'production';
        case 'test':
            return 'test';
        case 'coverage':
            return 'coverage';
        default:
            return 'development';
    }
}

module.exports = require(`./webpack.config.${config()}.js`);
