import Project from "../../core/project.js";
import Todo from "../../core/todo.js";
import render from "../pages/homePage.js";

const projects = [];
const project1 = new Project("helo");
project1.addTodo(new Todo("what", "do the stuff", "2020-10-10", "high"));
project1.addTodo(new Todo("what", "do the stuff", "2020-10-10", "high"));
project1.addTodo(new Todo("what", "do the stuff", "2020-10-10", "high"));
project1.addTodo(new Todo("what", "do the stuff", "2020-10-10", "high"));
project1.addTodo(new Todo("what", "do the stuff", "2020-10-10", "high"));
project1.addTodo(new Todo("what", "do the stuff", "2020-10-10", "high"));
// Add more todos...
projects.push(project1);

const project2 = new Project("world");
project2.addTodo(new Todo("blah", "adsklfa;sdkljfasdjd", "2023-10-23", "high"));
project2.addTodo(new Todo("blah", "adsklfa;sdkljfasdjd", "2023-10-23", "high"));
// Add more todos...
projects.push(project2);

function createTodoCard(todo, index, parentIndex) {
  const card = document.createElement("div");

  card.classList.add("card");
  card.setAttribute("data-card-index", index);
  card.setAttribute("data-parent-index", parentIndex);
  const check = document.createElement("input");
  check.type = "checkbox";
  check.setAttribute("data-card-index", index);
  check.setAttribute("data-parent-index", parentIndex);

  if(todo.isCompleted){
    card.classList.add('checked');
    check.checked = true;
  }

  const sno = document.createElement("p");
  sno.textContent = index + 1;

  const todoname = document.createElement("h4");
  todoname.textContent = todo.title;

  const dueDate = document.createElement("p");
  dueDate.textContent = todo.dueDate;

  const priority = document.createElement("p");
  priority.textContent = todo.priority;

  const desc = document.createElement("p");
  desc.textContent = todo.description;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("data-card-index", index);
  deleteBtn.setAttribute("data-parent-index", parentIndex);
  deleteBtn.textContent = "X";

  check.addEventListener("click", (e) => {
    const projectIndex = e.target.getAttribute("data-parent-index");
    const index = e.target.getAttribute("data-card-index");
    console.log(index);
    const cards = document.querySelectorAll(".card");
    projects[projectIndex].todos[index].isCompleted
      ? projects[projectIndex].todos[index].setCompleted(false)
      : projects[projectIndex].todos[index].setCompleted(true);
    render();
  });
  deleteBtn.addEventListener("click", (e) => {
    // console.log(projects[projectIndex].todos)
    const projectIndex = e.target.getAttribute("data-parent-index");
    const index = e.target.getAttribute("data-card-index");
    console.log(
      projects[e.target.getAttribute("data-parent-index")].todos[index],
      index
    );
    projects[projectIndex].todos = projects[projectIndex].todos.filter(
      (_todo, todoIndex) => index != todoIndex
    );
    // projects.forEach((project,parentIndex) => {
    //   project.todos = project.todos.filter(
    //     (_todo,index) => (index == e.target.getAttribute("parent"))&&(parentIndex!=e.target.getAttribute('data-parent-index'))
    //   );
    // });
    render();
    console.log(projects[projectIndex].todos);
  });

  // deleteBtn.addEventListener("click", (e) => {
  //   const projectIndex = e.target.getAttribute("data-project-index");
  //   const todoIndex = e.target.getAttribute("data-todo-index");

  //   projects[projectIndex].todos = projects[projectIndex].todos.filter((_todo, index) => {
  //     return `${index}` !== todoIndex;
  //   });

  card.appendChild(check);
  card.appendChild(sno);
  card.appendChild(dueDate);
  card.appendChild(todoname);
  card.appendChild(desc);
  card.appendChild(priority);
  card.appendChild(editBtn);
  card.appendChild(deleteBtn);

  return card;
}

function createProjectCards(projects) {
  const cards = document.createElement("div");
  cards.classList.add("cards");

  projects.forEach((project, parentIndex) => {
    const title = document.createElement("h2");
    title.textContent = project.name;
    cards.appendChild(title);

    project.todos.forEach((todo, index) => {
      const card = createTodoCard(todo, index, parentIndex);
      cards.appendChild(card);
    });
  });

  return cards;
}

export default function main() {
  const main = document.createElement("main");
  main.classList.add("main-grid");

  const projectCards = createProjectCards(projects);
  main.appendChild(projectCards);

  return main;
}
