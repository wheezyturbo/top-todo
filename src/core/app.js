import Project from "./Project/Project";

export default class app {
  static currentPage = "home";
  static projects = [(new Project("Default Project"))];
  static addProject(project){
    this.projects.push(project);
  }
  static setCurrentPage(page){
    this.currentPage = page;
  }
}

