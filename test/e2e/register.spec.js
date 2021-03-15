const { context } = require('../../src');

fixture('register')
  .page('https://animal-shelter-ui.herokuapp.com/');

test('verify register', async () => {
  await
    context.assertThat.isPresent(context.homePage.registerLink())
    .context.homePage.goToRegister()
    .context.registerPage.setCatName('bola de nieve V')
    // .context.assertThat.hasAttribute(context.registerPage.registerButton(), 'disabled')
    .context.registerPage.acceptTerms();
    // .context.assertThat.hasNoAttribute(context.registerPage.registerButton(), 'disabled');
});
