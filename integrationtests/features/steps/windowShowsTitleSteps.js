import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('application name is shown in window title', async function () {
  await expect(this.page).toHaveTitle(/Todo App/i);
});
