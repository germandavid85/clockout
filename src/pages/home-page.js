const { Selector, t } = require('testcafe');

const HomePage = function HomePageConstructor(context) {
  this.context = context;

  this.registerLink = () => Selector('main a').withText('Register animal');

  this.goToRegister = async function goToRegister() {
    await t.click(this.registerLink());

    return this;
  }
}

module.exports = {
  HomePage
};
