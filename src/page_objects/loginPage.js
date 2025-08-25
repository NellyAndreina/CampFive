class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInButton = page.locator('text=Iniciar sesión').first();
    //this.signInWithImdbLink = page.locator('text=a.list-group-item[href*="signin?openid.pape.max_auth_age=0"]');
    this.signInWithImdbLink = page.getByRole('link', { name: /Inicia sesión con IMDb/i });
    this.emailField = page.locator('#ap_email');
    this.passwordField = page.locator('#ap_password');
    this.submitButton = page.locator('#signInSubmit');
  }

  async gotoHome() {
    await this.page.goto('https://www.imdb.com/es/?ref_=nv_home');
  }

  async clickSigin(){
     await this.signInButton.waitFor({ state: 'visible' });
     await this.signInButton.click();
  }

  async clickOnIMDb() {
    await this.signInWithImdbLink.waitFor({ state: 'visible' });
    await this.signInWithImdbLink.click();
  }

  async login(email, password) {
  
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }
}
module.exports = { LoginPage };