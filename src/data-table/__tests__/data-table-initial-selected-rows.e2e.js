/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-env node */
/* eslint-disable flowtype/require-valid-file-annotation */

const { mount } = require('../../../e2e/helpers');

const { expect, test } = require('@playwright/test');

const { TABLE_ROOT } = require('./utilities.js');

test.describe('data table initial filters', () => {
  test('mounts with initial rows selected', async ({ page }) => {
    await mount(page, 'data-table--initial-selected-rows');
    await page.waitForSelector(TABLE_ROOT);
    // cell 1x1 should have a label with checkbox checked
    const cell1x1 = await page.$(`${TABLE_ROOT} > div:nth-child(2) label > input`);
    expect(await cell1x1.evaluate((node) => node.checked)).toBe(true);
  });
});
