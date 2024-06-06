import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('application heading is shown', async function () {
  await expect(this.todoAppPage.heading).toBeVisible();
});

Then('undone todo count badge shows value {int}', async function (expectedUndoneTodoCount) {
  await expect(this.todoAppPage.undoneTodoCountBadge).toHaveText(
    expectedUndoneTodoCount.toString()
  );
});
