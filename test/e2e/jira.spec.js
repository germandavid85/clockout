const { Selector } = require('testcafe');
const data = require('./data');

const projectRequired = ['dev'];

fixture('register')
  .page(data.baseUrl);

test('verify register', async (t) => {
  const { pTicketType, pComment, pTime, pProjectName } = inputParams();

  const { allTickets, user, password, ticket: { place } } = data;

  const projectSelector = Selector('#log-project');
  const projectOption = projectSelector.find('option');
  const placeSelector = Selector('#log-place');
  const placeOption = placeSelector.find('option');

  await t
    .typeText(Selector('#login-form-username'), user)
    .typeText(Selector('#login-form-password'), password)
    .click(Selector('#login'))
    .navigateTo(allTickets[pTicketType]);

    await t
      .typeText(Selector('#log-work-time-logged'), pTime)
      .typeText(Selector('#comment'), pComment)
      .click(placeSelector)
      .click(placeOption.withText(place))

    if (projectRequired.includes(pTicketType)) {
      console.log('pname', pProjectName)
      await t.click(projectSelector)
        .click(projectOption.withText(pProjectName));
    }


    await t.click(Selector('#log-work-submit'));
});

function isEmpty(value) {
  return [null, undefined, ''].includes(value);
}

function inputParams() {
  const pTicketType = process.argv[5];
  const pComment = process.argv[6];
  const pTime = process.argv[7];
  const pProjectName = process.argv[8];

  if (isEmpty(pTicketType) || isEmpty(pComment) || isEmpty(pTime)) {
    console.error('ticket type, comment, and time and mandatory');
    console.info('usage: clockout trainer "catch of the day" "8h"');

    throw new Error('invalid ussage');
  }

  if (!Object.keys(data.allTickets).includes(pTicketType)) {
    console.error(`invalid ticket type it must be one of ${Object.keys(data.allTickets)}`);
    console.info('usage: clockout trainer "catch of the day" "8h"');

    throw new Error('invalid ussage');
  }

  if (projectRequired.includes(pTicketType) && isEmpty(pProjectName)) {
    console.error(`when selectin any type of ${projectRequired} the param project name is required`);
    console.info('usage: clockout dev "catch of the day" "8h" "pname - pname"');

    throw new Error('invalid ussage');
  }

  return { pTicketType, pComment, pTime, pProjectName };
}
