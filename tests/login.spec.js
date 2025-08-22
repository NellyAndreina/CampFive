const { test, expect } = require('@playwright/test');
import { LoginPage } from '../src/page_objects/loginPage';
require('dotenv').config(); 

test('Login en IMDb', async ({ page }) => {
  const loginPage = new LoginPage(page);

    await loginPage.gotoHome();
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);

//  await expect(page.getByText(/Cuenta|Account/i)).toBeVisible();
});
