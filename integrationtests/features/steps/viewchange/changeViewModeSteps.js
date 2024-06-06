import { Then, When } from '@cucumber/cucumber';

When('light mode toggle button is clicked', async function () {
  await this.todoAppPage.lightModeToggleButton.click();
});

Then('page content matches screenshot', async function () {
  // You need to save a screenshot file with test case name and browser name
  // await this.page.screenshot({ path: 'screenshot.png' });
  // And then compare it with an image comparison tool like pixelmatch
});

When('dark mode toggle button is clicked', async function () {
  await this.todoAppPage.darkModeToggleButton.click();
});
