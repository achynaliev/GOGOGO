if (process.env.NODE_ENV === 'production') {
    // prod
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
};