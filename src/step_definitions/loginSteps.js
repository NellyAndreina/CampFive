require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const creds = require('../data/credentials');

test('Login IMDb y credenciales externas', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoHome();
  await loginPage.signInWithImdbLink();
  await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
  

  // Verify that you are logged in
  await expect(page.getByText(/Cuenta|Account/i)).toBeVisible();
});
