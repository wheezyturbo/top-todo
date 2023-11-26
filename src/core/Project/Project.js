export default class Project {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  
    addTodo(todo) {
      this.todos.push(todo);
    }
    setTodoCompleted(index) {
        this.todos[index].setTodoCompleted(true);
    }
    removeTodo(index) {
        this.todos.splice(index,1);
    }
    Todos() {
        return this.todos;
    }
  }
