class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInButton = page.locator('text=Iniciar sesión').first();
    this.signInWithImdbLink = page.getByRole('link', { name: /Inicia sesión con IMDb/i });
    this.emailField = page.locator('#ap_email');
    this.passwordField = page.locator('#ap_password');
    this.submitButton = page.locator('#signInSubmit');
    this.passwordAssistanceLink = page.locator('#auth-fpp-link-bottom');
    this.passwordAssistanceText = page.getByText(/Ayuda con la contraseña|Password assistance/i)
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

  async goToPasswordAssistance() {
    await this.signInButton.click();
    await this.signInWithImdbLink.click();
    await this.passwordAssistanceLink.waitFor({ state: 'visible' });
    await this.passwordAssistanceLink.click();
  }
}
module.exports = { LoginPage };