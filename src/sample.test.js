// @flow
'use strict';
const { logger } = require('@lib');
test('that everything works', () => {
  const input = true;
  logger.log('hello from sample.test.js')
  expect(input).toEqual(true);
});
