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
  app.projects.forEach((project,index) => {
    projectCards.appendChild(createProjectCard(project,index));
  });
  sidebar.appendChild(projectCards);
  return sidebar;
}

function createProjectCard(project,index) {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.setAttribute('data-project-index',index);
  if (app.currentPage == project.title) {
    // card.classList.add("active");
    card.classList.add("active-project");
  }
  const span = document.createElement('span');
  span.id = "span";

  span.textContent = project.title;
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", (e) => {
    const projectIndex = e.target.parentNode.getAttribute('data-project-index');
    app.projects.splice(projectIndex,1);
    app.currentPage="home";
    render();
  });
  span.addEventListener("click", () => {
    app.currentPage = project.title;
    render();
  });


  const edit = document.createElement('span');
  edit.textContent = "🖍️";

  edit.addEventListener('click',(e)=>{
    document.getElementById('span').contentEditable = true;
    edit.innerHTML = "";
    edit.innerHTML = "<button>/</button>";
  })

  card.appendChild(edit);
  card.appendChild(span);
  card.appendChild(deleteBtn);
  return card;
}
