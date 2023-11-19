import Project from "../../core/project";
export default function sidebar() {
  const sidebar = document.createElement("aside");
  const addBtn = document.createElement("button");
  addBtn.textContent = "New Project +";
  sidebar.appendChild(addBtn);

  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");
  const h2 = document.createElement("h2");
  h2.textContent = "Projects";
  projectsDiv.appendChild(h2);

  const projects = ["Default Project","user"];
  projects.forEach((project) => {
    const button = document.createElement("button");
    button.textContent = project;
    button.classList.add("project-btn");
    projectsDiv.appendChild(button);
  });
  sidebar.appendChild(projectsDiv);

  return sidebar;
}
