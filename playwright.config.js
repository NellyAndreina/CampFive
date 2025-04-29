const { devices } = require('@playwright/test');

module.exports = {
  timeout: 60 * 1000, 
  expect: {
    timeout: 10 * 1000, 
  },
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000', 
    headless: process.env.CI ? true : false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    // channel: 'chrome', 
  },
}