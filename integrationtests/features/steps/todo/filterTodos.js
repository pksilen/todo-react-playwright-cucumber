import { When } from '@cucumber/cucumber';

When('user enters {string} to search box', async function (text) {
  await this.todoAppPage.filterTodos(text, 1);
});
