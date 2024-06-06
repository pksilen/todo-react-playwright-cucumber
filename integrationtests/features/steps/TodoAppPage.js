import { expect } from '@playwright/test';

export default class TodoAppPage {
  static INITIAL_TODO_COUNT = 1;
  heading;
  undoneTodoCountBadge;
  todoFilterInput;
  addNewTodoTitleInput;
  addTodoButton;
  todoItems;
  editTodoButton;
  editTodoTitleInput;
  removeTodoButton;
  markTodoDoneButton;
  markTodoUndoneButton;
  showUndoneTodosOnlyToggle;
  listViewToggleButton;
  tableViewToggleButton;
  todoCheckbox;
  darkModeToggleButton;
  lightModeToggleButton;

  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('status').getByRole('heading', { name: /Todos/i });
    this.undoneTodoCountBadge = page.getByTitle(/Undone todo count/i);
    this.todoFilterInput = page.getByPlaceholder(/Search todos/i);
    this.addNewTodoTitleInput = page.getByLabel(/Add new todo.../i);
    this.todoItems = page.getByRole('listitem');
    this.editTodoButton = page.getByRole('button', { name: /Edit/i });
    this.editTodoTitleInput = page.getByLabel(/Edit todo/i);
    this.removeTodoButton = page.getByRole('button', { name: /Remove/i });
    this.markTodoDoneButton = page.getByRole('button', { name: /Mark done/i });
    this.markTodoUndoneButton = page.getByRole('button', { name: /Mark undone/i });
    this.showUndoneTodosOnlyToggle = page.getByLabel(/Show undone only/i);
    this.listViewToggleButton = page.getByRole('button', { name: /list/i });
    this.tableViewToggleButton = page.getByRole('button', { name: /table/i });
    this.todoCheckbox = page.getByRole('checkbox', { name: /Dummy todo/i });
    this.darkModeToggleButton = page.getByRole('button', { name: /dark/i });
    this.lightModeToggleButton = page.getByRole('button', { name: /light/i });
    this.addTodoButton = page.getByRole('button', { name: /Add todo/i });
  }

  async goto() {
    await this.page.goto('http://localhost:3000?test=true');
    return this;
  }

  async addNewTodo(title, expectedInitialTodoCount) {
    await expect(this.todoItems).toHaveCount(expectedInitialTodoCount);
    await this.addNewTodoTitleInput.fill(title);
    await this.addTodoButton.click();
  }

  async expectNewTodoAdded(title) {
    const addedTodo = this.page.getByText(title, { exact: true });
    await expect(addedTodo).toBeVisible();
    await expect(this.addNewTodoTitleInput).toBeEmpty();
  }

  async filterTodos(text, expectedInitialTodoCount) {
    await expect(this.todoItems).toHaveCount(expectedInitialTodoCount);
    this.todoFilterInput.fill(text);
  }
}
