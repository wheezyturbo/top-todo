import { projects as pjs } from "../../core/projects";
import Project from "../../core/project";
import render from "../pages/homePage";
import { renderProjectCards } from "./main";

export default function sidebar() {
  const projectTitles = pjs.map((project) => project.name);
  const sidebar = document.createElement("aside");
  const addBtn = document.createElement("button");
  addBtn.textContent = "New Project +";
  addBtn.addEventListener("click", (e) => {
    document.body.appendChild(addProjectForm());
    document.querySelector(".name-input").focus();
  });
  sidebar.appendChild(addBtn);

  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");
  const h2 = document.createElement("h2");
  h2.textContent = "Projects";
  projectsDiv.appendChild(h2);

  projectTitles.forEach((project,index) => {
    const button = document.createElement("button");
    button.textContent = project;
    button.setAttribute('data-project-index',index);
    button.classList.add("project-btn");
    button.addEventListener('click',(e)=>{
      console.log(index, pjs[index]);
      renderProjectCards(pjs[index],index);
    })
    projectsDiv.appendChild(button);
  });
  sidebar.appendChild(projectsDiv);

  return sidebar;
}

function addProjectForm() {
  const div = document.createElement("div");
  div.classList.add("add-project-div");
  const form = document.createElement("form");
  form.classList.add("add-project-form");
  const h2 = document.createElement("h2");
  h2.textContent = "Add a new Project";
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  const nameInput = document.createElement("input");
  nameInput.classList.add("name-input");
  const submit = document.createElement("button");
  submit.classList.add("add-project-button");

  submit.textContent = "Add Project";
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const project = new Project(nameInput.value);
    pjs.push(project);
    // document.body.removeChild(addProjectForm());
    render();
  });
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  closeBtn.classList.add("closeBtn");
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.removeChild(document.querySelector(".add-project-div"));
  });
  form.appendChild(h2);
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(submit);
  form.appendChild(closeBtn);
  div.appendChild(form);

  return div;
}
