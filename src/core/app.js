import Project from "./Project/Project";

export default class app {
  static currentPage = "home";
  static projects = [(new Project("Default Project"))];
  constructor(){
    if(!localStorage.getItem("projects")){
      app.projects =[(new Project("default project"))]; 
    }
  }
  static addProject(project){
    this.projects.push(project);
    localStorage.setItem("projects",JSON.stringify(app.projects));
  }
  static setCurrentPage(page){
    this.currentPage = page;
  }
  static removeProject(index){
    app.projects.splice(index, 1);
    localStorage.setItem("projects",JSON.stringify(app.projects));
  }
}

localStorage.setItem("projects", JSON.stringify(app.projects));


