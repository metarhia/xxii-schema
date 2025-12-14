'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const metadomain = require('..');

test('Load metadomain', async () => {
  const model = await metadomain.load();
  assert.ok(model);
});
