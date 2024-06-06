import { When } from '@cucumber/cucumber';

When('user clicks todo remove button', async function () {
  await this.todoAppPage.removeTodoButton.click();
});
