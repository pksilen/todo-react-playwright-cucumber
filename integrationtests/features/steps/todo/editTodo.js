import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('user clicks todo edit button', async function () {
  await this.todoAppPage.editTodoButton.click();
});

Then('todo title is editable', async function () {
  await expect(this.todoAppPage.editTodoTitleInput).toBeVisible();
});
