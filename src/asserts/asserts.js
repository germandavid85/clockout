const { t } = require('testcafe');

const Asserts = function Asserts(context) {
  this.context = context;

  this.hasAttribute = async function (selector, attributeName) {
    await t.expect(selector.hasAttribute(attributeName)).ok();

    return this;
  }

  this.hasNoAttribute = async function (selector, attributeName) {
    await t.expect(selector.hasAttribute(attributeName)).notOk();

    return this;
  }

  this.isPresent = async function (selector) {
    await t.expect(selector.exists).ok()

    return this;
  };
}

module.exports = {
  Asserts
};
