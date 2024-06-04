import { After, When } from '@cucumber/cucumber';
import { chromium, firefox, webkit } from '@playwright/test';
import TodoAppPage from './TodoAppPage.js';

When('user navigates to application using chromium', async function () {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.todoAppPage = new TodoAppPage(this.page);
  await this.todoAppPage.goto();
});

When('user navigates to application using firefox', async function () {
  this.browser = await firefox.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.todoAppPage = new TodoAppPage(this.page);
  await this.todoAppPage.goto();
});

When('user navigates to application using webkit', async function () {
  this.browser = await webkit.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.todoAppPage = new TodoAppPage(this.page);
  await this.todoAppPage.goto();
});

After(async function () {
  await this.browser.close();
});
