import app from "../app";

export default class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
    localStorage.setItem("projects", JSON.stringify(app.projects));
  }
  setTodoCompleted(index) {
    this.todos[index].setTodoCompleted(true);
    localStorage.setItem("projects", JSON.stringify(app.projects));
  }
  removeTodo(index) {
    this.todos.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(app.projects));
  }
  Todos() {
    return this.todos;
  }
  setTitle(title) {
    this.title = title;
    localStorage.setItem("projects", JSON.stringify(app.projects));
  }
}
