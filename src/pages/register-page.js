const { Selector, t } = require('testcafe');

const RegisterPage = function RegisterPageConstructor(context) {
  this.context = context;

  this.petNameInput = () => Selector('#pet-name');
  this.registerButton = () => Selector('button').withText('REGISTRAR');
  this.acceptTermsCheck = () => Selector('span').withText('Acepto Términos y Condiciones');

  this.setCatName = async function setCatName(catName) {
    await t.typeText(this.petNameInput(), catName);

    return this;
  };

  this.acceptTerms = async function acceptTerms() {
    await t.click(this.acceptTermsCheck());

    return this;
  };
}

module.exports = {
  RegisterPage
};
