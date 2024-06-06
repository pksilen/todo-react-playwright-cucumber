import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('table view toggle button is clicked', async function () {
  await this.todoAppPage.tableViewToggleButton.click();
});

Then('todo checkbox is shown', async function () {
  await expect(this.todoAppPage.todoCheckbox).toBeVisible();
});

When('list view toggle button is clicked', async function () {
  await this.todoAppPage.listViewToggleButton.click();
});

Then('todo checkbox is hidden', async function () {
  await expect(this.todoAppPage.todoCheckbox).toBeHidden();
});
