import './style.css'

import Todo from "./components/core/todo.js";
import Project from "./components/core/project.js";
import render from "./components/ui/pages/homePage.js";


const project = new Project("project1");
console.log(project);
const todo1 = new Todo("todo1", "desc", "10-5-2002", "high");
project.addTodo(todo1);
project.addTodo(new Todo("todo2", "desc lorem20", "10-5-2002", "low"));

// project.showTodos();
project.removeTodo(new Todo("todo2", "desc lorem20", "10-5-2002", "low"));
console.log(project);


render();