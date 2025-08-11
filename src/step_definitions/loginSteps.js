const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const creds = require('../data/credentials');

test('Login IMDb y credenciales externas', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoHome();
  await loginPage.login(creds.email, creds.password);

  // Verificar que este logueado
  await expect(page.getByText(/Cuenta|Account/i)).toBeVisible();
});
