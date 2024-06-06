import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('user adds todo with title {string}', async function (todoTitle) {
  await this.todoAppPage.addNewTodo(todoTitle, 1);
});

Then('undone todo count badge shows {int}', async function (todoCount) {
  await expect(this.todoAppPage.undoneTodoCountBadge).toHaveText(todoCount.toString());
});

Then('new todo with title {string} is shown', async function (todoTitle) {
  await this.todoAppPage.expectNewTodoAdded(todoTitle);
});
