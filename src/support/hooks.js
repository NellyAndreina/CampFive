const { Before, After, BeforeAll, AfterAll, Status } = require('@cucumber/cucumber');
const { chromium, request } = require('@playwright/test');

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: process.env.CI ? true : false });
});

AfterAll(async function () {
  await browser.close();
});

Before(async function (scenario) { // 'this' es CustomWorld
 
  this.context = await browser.newContext({
  });
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
  console.log(`\nEjecutando escenario: ${scenario.pickle.name}`);
});

After(async function (scenario) { 
  if (!this.page || !this.context) {
      console.warn('Page o Context no se inicializaron correctamente.');
      return;
  }

  if (scenario.result?.status === Status.FAILED) {
     try {
       const screenshot = await this.page.screenshot({
         path: `reports/screenshots/<span class="math-inline">\{scenario\.pickle\.name\.replace\(/\\s\+/g, '\_'\)\}\_</span>{Date.now()}.png`,
         fullPage: true,
       });
       this.attach(screenshot, 'image/png');
     } catch(error) {
         console.error("Fallo al tomar screenshot:", error);
     }
  }
  await this.page.close();
  await this.context.close();
});