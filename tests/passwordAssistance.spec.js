const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/page_objects/loginPage');
require('dotenv').config();

test('Ir a Password Assistance desde IMDb', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoHome();
  await loginPage.goToPasswordAssistance();

  // Validar que entre en la página de ayuda de contraseñas
  await expect(loginPage.passwordAssistanceText).toBeVisible();
});
