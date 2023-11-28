import Project from "./Project/Project";
import Todo from "./Todo/Todo";

// export default class app {
//   static currentPage = "home";
//   static projects = app.loadProjectsFromLocalStorage() || [new Project("Default Project")];

//   static addProject(project) {
//     app.projects.push(project);
//     localStorage.setItem("projects", JSON.stringify(app.projects));
//   }
//   static setCurrentPage(page) {
//     app.currentPage = page;
//   }
//   static removeProject(index) {
//     app.projects.splice(index, 1);
//     localStorage.setItem("projects", JSON.stringify(app.projects));
//   }
//   static saveProjectsToLocalStorage() {
//     localStorage.setItem("projects", JSON.stringify(app.projects));
//   }

//   static loadProjectsFromLocalStorage() {
//     const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
//     app.projects = storedProjects.map((projectData) => {
//       const project = { title: projectData.title, todos: [] };
//       projectData.todos.forEach((todoData) => {
//         const todo = new Todo(
//           todoData.name,
//           todoData.description,
//           todoData.dueDate,
//           todoData.priority
//         );
//         todo.setCompleted(todoData.isCompleted);
//         project.todos.push(todo);
//       });
//       return project;
//     });
//   }
// }

class App {
  constructor() {
    this.currentPage = "home";
    if (localStorage.getItem("projects")) this.loadProjectsFromLocalStorage();
    else this.projects = [new Project("Default Project")];
    console.log(this);
  }

  addProject(project) {
    this.projects.push(project);
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }
  setCurrentPage(page) {
    this.currentPage = page;
  }
  removeProject(index) {
    this.projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }
  saveProjectsToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  loadProjectsFromLocalStorage() {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    console.log(storedProjects);
    this.projects = storedProjects.map((projectData) => {
      const project = new Project(projectData.title)
      projectData.todos.forEach((todoData) => {
        const todo = new Todo(
          todoData.name,
          todoData.description,
          todoData.dueDate,
          todoData.priority
        );
        todo.setCompleted(todoData.isCompleted);
        project.todos.push(todo);
      });
      return project;
    });
  }
}
const app = new App();
export default app;
