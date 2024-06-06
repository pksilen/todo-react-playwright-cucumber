import { When } from '@cucumber/cucumber';

When('user clicks show undone todos only toggle', async function () {
  await this.todoAppPage.showUndoneTodosOnlyToggle.click();
});

When('user marks todo done', async function () {
  await this.todoAppPage.markTodoDoneButton.click();
});
