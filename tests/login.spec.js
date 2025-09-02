const { test, expect } = require('@playwright/test');
import { LoginPage } from '../src/page_objects/loginPage';
require('dotenv').config(); 

test('Login in IMDb', async ({ page, browser }) => {
  const loginPage = new LoginPage(page);

    await loginPage.gotoHome();
    await loginPage.clickSigin();
    await loginPage.clickOnIMDb();
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
    
await expect(loginPage.signInButton).not.toBeVisible();
//await browser.close();
});
