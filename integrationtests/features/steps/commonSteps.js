import { After, When } from '@cucumber/cucumber';
import { chromium, devices, firefox, webkit } from '@playwright/test';
import TodoAppPage from './TodoAppPage.js';

async function navigateToApplication(world, browserContext) {
  world.page = await browserContext.newPage();
  world.todoAppPage = new TodoAppPage(world.page);
  await world.todoAppPage.goto();
}

When('user navigates to application using chromium desktop', async function () {
  this.browser = await chromium.launch({ headless: false });
  const browserContext = await this.browser.newContext(devices['Desktop Chrome']);
  await navigateToApplication(this, browserContext);
});

When('user navigates to application using firefox desktop', async function () {
  this.browser = await firefox.launch({ headless: false });
  const browserContext = await this.browser.newContext(devices['Desktop Firefox']);
  await navigateToApplication(this, browserContext);
});

When('user navigates to application using webkit desktop', async function () {
  this.browser = await webkit.launch({ headless: false });
  const browserContext = await this.browser.newContext(devices['Desktop Webkit']);
  await navigateToApplication(this, browserContext);
});

When('user navigates to application using iPhone 14', async function () {
  this.browser = await chromium.launch({ headless: false });
  const browserContext = await this.browser.newContext(devices['iPhone 14']);
  await navigateToApplication(this, browserContext);
});

After(async function () {
  await this.browser.close();
});
