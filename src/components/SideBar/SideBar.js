import Project from "../../core/Project/Project";
import app from "../../core/app";
import render from "../../core/render/render";

export default function sidebar() {
  const sidebar = document.createElement("aside");
  sidebar.classList.add("sidebar");
  const addProjectBtnContainer = document.createElement("div");
  const addProjectBtn = document.createElement("button");
  addProjectBtn.textContent = "Add Project +";
  addProjectBtn.classList.add("add-project-button");
  addProjectBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.placeholder = "Enter a new Project Name";
    const close = document.createElement("button");
    close.textContent = "X";
    const button = document.createElement("button");
    button.textContent = "Add";
    button.addEventListener("click", () => {
      app.addProject(new Project(input.value));
      addProjectBtnContainer.innerHTML = "";
      addProjectBtnContainer.appendChild(addProjectBtn);
      app.currentPage = input.value;
      render();
    });
    close.addEventListener("click", () => {
      addProjectBtnContainer.innerHTML = "";
      addProjectBtnContainer.appendChild(addProjectBtn);
    });
    addProjectBtnContainer.innerHTML = "";
    addProjectBtnContainer.appendChild(input);
    addProjectBtnContainer.appendChild(button);
    addProjectBtnContainer.appendChild(close);
  });
  addProjectBtnContainer.appendChild(addProjectBtn);
  sidebar.appendChild(addProjectBtnContainer);

  const projectCards = document.createElement("div");
  projectCards.classList.add("project-cards-div");
  app.projects.forEach((project, index) => {
    projectCards.appendChild(createProjectCard(project, index));
  });
  sidebar.appendChild(projectCards);
  return sidebar;
}

function createProjectCard(project, index) {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.setAttribute("data-project-index", index);
  if (app.currentPage == project.title) {
    // card.classList.add("active");
    card.classList.add("active-project");
  }
  const span = document.createElement("span");
  span.id = "span";

  span.textContent = project.title;
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", (e) => {
    const projectIndex = e.target.parentNode.getAttribute("data-project-index");
    app.removeProject(projectIndex);
    app.currentPage = "home";
    render();
  });
  span.addEventListener("click", () => {
    app.currentPage = project.title;
    render();
  });

  const edit = document.createElement("span");
  edit.textContent = "🖍️";

  edit.addEventListener("click", (e) => {
    document.body.appendChild(
      showRenameProjectModal(
        e.target.parentNode.getAttribute("data-project-index")
      )
    );
    // edit.innerHTML = "<button>/</button>";
  });

  card.appendChild(edit);
  card.appendChild(span);
  card.appendChild(deleteBtn);
  return card;
}

function showRenameProjectModal(parent) {
  const div = document.createElement("div");
  div.classList.add("show-rename-project-modal");
  const form = document.createElement("form");
  form.classList.add("show-rename-project-form");
  const input = document.createElement("input");
  input.value = app.projects[parent].title;
  input.classList.add("show-rename-input");
  const button = document.createElement("button");
  button.textContent = "Rename";
  button.addEventListener("click", (e) => {
    e.preventDefault();
    app.projects[parent].setTitle(input.value);
    render();
  });
  const close = document.createElement("button");
  close.textContent = "X";
  close.classList.add("rename-close-button");
  close.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.removeChild(
      document.querySelector(".show-rename-project-modal")
    );
  });
  form.appendChild(input);
  form.appendChild(close);
  form.appendChild(button);
  div.appendChild(form);
  return div;
}
