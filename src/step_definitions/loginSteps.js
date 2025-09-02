require('dotenv').config();
const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../src/page_objects/LoginPage');
const creds = require('../data/credentials');

test('Login IMDb y credenciales externas', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoHome();
  await loginPage.signInWithImdbLink();
  await loginPage.login(process.env.EMAIL, process.env.PASSWORD);

});
