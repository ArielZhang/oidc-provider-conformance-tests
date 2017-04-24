const phantom = require('phantom');

let instance;

before(async function () {
  instance = await phantom.create(['--ignore-ssl-errors=yes']);
  global.page = await instance.createPage();
});

after(async function () {
  await instance.exit();
});

afterEach(async function () {
  await global.page.off('onLoadFinished');
});
