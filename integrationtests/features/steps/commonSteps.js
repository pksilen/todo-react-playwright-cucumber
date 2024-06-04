import { After, When } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import TodoAppPage from './TodoAppPage.js';

When('user navigates to application', async function () {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.todoAppPage = new TodoAppPage(this.page);
  this.todoAppPage.goto();
});

After(async function () {
  await this.browser?.close();
});
