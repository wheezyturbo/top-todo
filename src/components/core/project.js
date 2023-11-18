export default class Project {
    constructor(name) {
      this.name = name;
      this.todos = [];
    }
  
    addTodo(todo) {
      this.todos.push(todo);
    }
    markTodoAsDone(todo) {
      // this.todos.filter((todo_) => todo == todo_).classList.add("completed");
    }
    removeTodo(todo) {
      this.todos = this.todos.filter((todo_) => {
        return todo.title!=todo_.title;
      });
    }
    showTodos() {
      this.todos.forEach((todo) => {
        console.log(todo);
      });
    }
  }