import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('mark todo done button is hidden', async function () {
  await expect(this.todoAppPage.markTodoDoneButton).toBeHidden();
});

Then('mark todo undone is visible', async function () {
  await expect(this.todoAppPage.markTodoUndoneButton).toBeVisible();
});
