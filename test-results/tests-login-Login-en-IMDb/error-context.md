# Test info

- Name: Login en IMDb
- Location: /Users/nelly.mejias/Documents/CampFive/tests/login.spec.js:5:1

# Error details

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /Sign in with IMDb/i })
    2 × waiting for" https://www.imdb.com/es/registration/signin/?u=%2Fes%2Fregistration%2Fsignin%2F&ref_=regsn_nv_signup_cm_btn" navigation to finish...
      - navigated to "https://www.imdb.com/es/registration/signin/?u=%2Fes%2Fregistration%2Fsignin%2F&ref_=regsn_nv_signup_cm_btn"

    at LoginPage.login (/Users/nelly.mejias/Documents/CampFive/src/page_objects/loginPage.js:15:35)
    at /Users/nelly.mejias/Documents/CampFive/tests/login.spec.js:9:5
```

# Page snapshot

```yaml
- navigation:
  - link "Inicio":
    - /url: /es/?ref_=regsn_nv_home
    - img
  - text: Menú
  - search:
    - text: Todo
    - combobox:
      - textbox "Buscar en IMDb"
      - listbox
    - status: 8 sugerencias disponibles
    - button "Enviar búsqueda"
  - link "Ir a IMDb Pro":
    - /url: https://pro.imdb.com/login/ap?u=/login/lwa&imdbPageAction=signUp&rf=cons_nb_hm&ref_=cons_nb_hm
    - img
  - link "Lista de visualización":
    - /url: /es/list/watchlist/?ref_=regsn_nv_urwls_all
  - link "Iniciar sesión":
    - /url: /es/registration/signin/?u=%2Fes%2Fregistration%2Fsignin%2F&ref_=regsn_nv_generic_lgin
  - text: ES
- main:
  - iframe
  - heading "Iniciar sesión" [level=3]
  - link "Crea una cuenta":
    - /url: https://www.imdb.com/ap/register?openid.return_to=https%3A%2F%2Fwww.imdb.com%2Fregistration%2Fap-signin-handler%2Fimdb_us&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=imdb_us&openid.mode=checkid_setup&siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl91cyIsInJlZGlyZWN0VG8iOiJodHRwczovL3d3dy5pbWRiLmNvbS9lcy9yZWdpc3RyYXRpb24vc2lnbmluLyJ9&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
  - separator
  - text: o
  - separator
  - link "Inicia sesión con IMDb":
    - /url: https://www.imdb.com/ap/signin?clientContext=130-0269781-9512438&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.imdb.com%2Fregistration%2Fap-signin-handler%2Fimdb_us&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=imdb_us&openid.mode=checkid_setup&siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl91cyIsInJlZGlyZWN0VG8iOiJodHRwczovL3d3dy5pbWRiLmNvbS9lcy9yZWdpc3RyYXRpb24vc2lnbmluLyJ9&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
    - img
    - text: Inicia sesión con IMDb
  - link "Iniciar sesión con Amazon":
    - /url: https://www.imdb.com/ap/signin?clientContext=130-0269781-9512438&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.imdb.com%2Fap-signin-handler&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&idpOptions=%7B%22scope%22%3A%22profile+payments_portal%3A%3Awidget%22%2C%22pageid%22%3A%22lwa%22%7D&openid.assoc_handle=imdb_lwa&openid.mode=checkid_setup&siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl9sd2EiLCJyZWRpcmVjdFRvIjoiaHR0cHM6Ly93d3cuaW1kYi5jb20vZXMvcmVnaXN0cmF0aW9uL3NpZ25pbi8ifQ&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&identityProvider=LoginWithAmazon&relyingParty=IMDbPool
    - img
    - text: Iniciar sesión con Amazon
  - link "Iniciar sesión con Google":
    - /url: https://www.imdb.com/ap/signin?clientContext=130-0269781-9512438&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.imdb.com%2Fap-signin-handler&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=imdb_google&openid.mode=checkid_setup&siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl9nb29nbGUiLCJyZWRpcmVjdFRvIjoiaHR0cHM6Ly93d3cuaW1kYi5jb20vZXMvcmVnaXN0cmF0aW9uL3NpZ25pbi8ifQ&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&identityProvider=GOOGLE&relyingParty=IMDbPool
    - img
    - text: Iniciar sesión con Google
  - link "Iniciar sesión con Apple":
    - /url: https://www.imdb.com/ap/signin?clientContext=130-0269781-9512438&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.imdb.com%2Fregistration%2Fap-signin-handler%2Fimdb_apple&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=imdb_apple&openid.mode=checkid_setup&siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl9hcHBsZSIsInJlZGlyZWN0VG8iOiJodHRwczovL3d3dy5pbWRiLmNvbS9lcy9yZWdpc3RyYXRpb24vc2lnbmluLyJ9&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&identityProvider=APPLE&relyingParty=IMDbPool
    - img
    - text: Iniciar sesión con Apple
  - text: Al iniciar sesión, aceptas las
  - link "Condiciones de uso":
    - /url: /es/conditions/?ref_=regsn
  - text: "y"
  - link "Política de privacidad":
    - /url: /es/privacy/?ref_=regsn
  - text: de IMDb. Es mucho mejor cuando inicias sesión Recomendaciones personalizadas Títulos a la medida de tu gusto. Tu lista de videos Haz un seguimiento de tus visualizaciones futuras y recibe recordatorios. Tus calificaciones Califica y recuerda lo que ves. Contribuir a IMDb Agrega datos que ayuden a millones de fanáticos. Servicios preferidos Edita tus servicios de streaming preferidos.
- heading "Visto recientemente" [level=3]
- text: No tienes páginas vistas recientemente
- contentinfo:
  - link "Inicia sesión para obtener más acceso":
    - /url: /es/registration/signin/?u=%2Fes%2Fregistration%2Fsignin%2F&ref_=regsn_ftr_reg
  - text: Sigue a IMDb en las redes sociales
  - link "TikTok":
    - /url: https://www.tiktok.com/@imdb
  - link "Instagram":
    - /url: https://instagram.com/imdb
  - link "Twitter":
    - /url: https://twitter.com/imdb
  - link "YouTube":
    - /url: https://youtube.com/imdb/
  - link "Facebook":
    - /url: https://facebook.com/imdb
  - text: Obtener la aplicación de IMDb Para Android e iOS
  - group:
    - img "Obtener la aplicación de IMDb"
    - link "Para Android e iOS":
      - /url: https://slyb.app.link/Aa96cLcBeAb
  - link "Ayuda":
    - /url: https://help.imdb.com/imdb
  - link "Índice del sitio":
    - /url: https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so
  - link "IMDbPro":
    - /url: https://pro.imdb.com?ref_=cons_tf_pro&rf=cons_tf_pro
  - link "Box Office Mojo":
    - /url: https://www.boxofficemojo.com
  - link "Licencia de datos de IMDb":
    - /url: https://developer.imdb.com/
  - link "Sala de prensa":
    - /url: /es/pressroom/?ref_=regsn_ftr
  - link "Publicidad":
    - /url: https://advertising.amazon.com/resources/ad-specs/imdb/
  - link "Trabaja con nosotros":
    - /url: https://www.amazon.jobs/en/teams/imdb
  - link "Condiciones de uso":
    - /url: /es/conditions/?ref_=regsn_ftr
  - link "Política de privacidad":
    - /url: /es/privacy/?ref_=regsn_ftr
  - link "Tus opciones de privacidad de anuncios":
    - /url: /es/privacy/redirect/?ref_=regsn_ftr
    - img
  - link "Your Ads Privacy Choices":
    - /url: /es/privacy/redirect/?ref_=regsn_ftr
  - img "IMDb, una compañía de Amazon"
  - paragraph: © 1990-2025 by IMDb.com, Inc.
- button "Volver al inicio"
- img
- status
- img
- alert
```

# Test source

```ts
   1 | class LoginPage {
   2 |   constructor(page) {
   3 |     this.page = page;
   4 |     this.signInButton = page.locator('text=Iniciar sesión').first();
   5 |     this.signInWithImdbLink = page.getByRole('link', { name: /Sign in with IMDb/i });
   6 |     this.emailField = page.locator('#ap_email');
   7 |     this.passwordField = page.locator('#ap_password');
   8 |     this.submitButton = page.locator('#signInSubmit');
   9 |   }
  10 |   async gotoHome() {
  11 |     await this.page.goto('https://www.imdb.com/es/?ref_=nv_home');
  12 |   }
  13 |   async login(email, password) {
  14 |     await this.signInButton.click();
> 15 |     await this.signInWithImdbLink.click();
     |                                   ^ Error: locator.click: Test timeout of 60000ms exceeded.
  16 |     await this.emailField.fill(email);
  17 |     await this.passwordField.fill(password);
  18 |     await this.submitButton.click();
  19 |   }
  20 | }
  21 | module.exports = { LoginPage };
```