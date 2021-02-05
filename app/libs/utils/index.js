'use strict';
const config = require('../config');
const Mongodb = require('@pick-star/cli-mongodb');

function mongo() {
    return Mongodb(config.mongodbUrl, config.mongodbDBName);
}

module.exports = mongo;
