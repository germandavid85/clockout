const { Asserts } = require('../asserts');
const { HomePage, RegisterPage } = require('../pages');
const proxymise = require('../proxymise');

const Context = function ContextConstructor() {
  this.assertThat = new (proxymise(Asserts))(this);
  this.homePage = new (proxymise(HomePage))(this);
  this.registerPage = new (proxymise(RegisterPage))(this);
}

module.exports = {
  context: new Context()
};
