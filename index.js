'use strict';

const path = require('node:path');
const { loadModel } = require('metaschema');

const schemasPath = path.join(__dirname, 'schemas');
const load = () => loadModel(schemasPath);

module.exports = { load };
