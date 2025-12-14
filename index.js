'use strict';

const { loadModel } = require('metaschema');
const load = () => loadModel('./schemas');
module.exports = { load };
