class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInButton = page.locator('text=Iniciar sesión').first();
    this.signInWithImdbLink = page.getByRole('link', { name: /Sign in with IMDb/i });
    this.emailField = page.locator('#ap_email');
    this.passwordField = page.locator('#ap_password');
    this.submitButton = page.locator('#signInSubmit');
  }

  async gotoHome() {
    await this.page.goto('https://www.imdb.com/es/?ref_=nv_home');
  }
  
  async login(email, password) {
    await this.signInButton.click();
    await this.signInWithImdbLink.click();
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }
}
module.exports = { LoginPage };