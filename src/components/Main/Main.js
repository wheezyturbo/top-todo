import { intervalToDuration } from "date-fns";
import app from "../../core/app";
import render from "../../core/render/render";
import AddTodoButton from "../AddTodoButton/AddTodoButton";

export default function Main() {
  const main = document.createElement("main");
  main.classList.add("main");
  const cards = document.createElement("div");
  cards.classList.add("todo-cards");
  if (app.currentPage == null) {
    app.currentPage = "home";
  }
  app.projects.forEach((project, projectIndex) => {
    if (app.currentPage == "home") {
      const h2 = document.createElement("h2");
      h2.textContent = project.title;
      cards.append(h2);
      project.todos.forEach((todo, index) => {
        const card = createTodoCard(todo, index, projectIndex);
        cards.appendChild(card);
      });
    } else if (app.currentPage == project.title) {
      const h2 = document.createElement("h2");
      h2.textContent = project.title;
      cards.append(h2);
      project.todos.forEach((todo, index) => {
        const card = createTodoCard(todo, index, projectIndex);
        cards.appendChild(card);
      });
      main.appendChild(AddTodoButton());
    } else if (app.currentPage == "this_week") {
      const h2 = document.createElement("h2");
      h2.textContent = project.title;
      cards.append(h2);
      project.todos.forEach((todo, index) => {
        if(todo.dueDate){
          console.log(todo.dueDate);
        const { days } = intervalToDuration({
          start: new Date(todo.dueDate),
          end: new Date(),
        });
        if (
          new Date(todo.dueDate).getDate() != new Date().getDate() &&
          days <= 7
        ) {
          const card = createTodoCard(todo, index, projectIndex);
          cards.appendChild(card);
        }}
      });
    } else if (app.currentPage == "today") {
      const h2 = document.createElement("h2");
      h2.textContent = project.title;
      cards.append(h2);
      project.todos.forEach((todo, index) => {
        // const { days } = intervalToDuration({
        //   start: new Date(todo.dueDate),
        //   end: new Date(),
        // });
        if (new Date(todo.dueDate).getDate() == new Date().getDate()) {
          const card = createTodoCard(todo, index, projectIndex);
          cards.appendChild(card);
        }
      });
    }
    // main.appendChild(cards);
  });

  main.appendChild(cards);
  return main;
}

function createTodoCard(todo, index, projectIndex) {
  const card = document.createElement("div");
  card.classList.add("todo-card");
  card.classList.add(`${todo.priority}`);

  if (todo.isCompleted) {
    card.classList.add("completed");
  } else {
    card.classList.remove("completed");
  }
  // card.innerHTML = `
  //       <h3>${index}</h3>
  //       <input type = "checkbox">
  //       <h3>${todo.name}</h3>
  //       <p>${todo.date}</p>
  //       <button>Edit</button>
  //       <button>Delete</button>
  //   `;

  card.setAttribute("data-todo-index", index);
  card.setAttribute("data-project-index", projectIndex);

  const h3 = document.createElement("h3");
  h3.textContent = index;
  const input = document.createElement("input");
  input.type = "checkbox";
  if (todo.isCompleted == true) {
    console.log(input.checked);
    input.checked = true;
  }

  input.addEventListener("click", (e) => {
    // const todo = app.projects[projectIndex].todos[index];
    // todo.isCompleted = todo.isCompleted == true ? false : true;
    if (todo.isCompleted) {
      todo.setCompleted(false);
    } else {
      todo.setCompleted(true);
    }
    // e.target.parentNode.classList.toggle("completed");
    render();
  });

  const name = document.createElement("h3");
  name.textContent = todo.name;
  const date = document.createElement("p");
  date.textContent = todo.dueDate;
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", (e) => {
    console.log(e.target.parentNode.getAttribute("data-todo-index"));
    document.body.appendChild(todoDetailsView(todo, index, projectIndex));
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", (e) => {
    const projectIndex = e.target.parentNode.getAttribute("data-project-index");
    const todoIndex = e.target.parentNode.getAttribute("data-todo-index");
    console.log(e.target.parentNode);
    app.projects[projectIndex].removeTodo(todoIndex);
    render();
  });

  card.appendChild(h3);
  card.appendChild(input);
  card.appendChild(name);
  card.appendChild(date);
  card.appendChild(editBtn);
  card.appendChild(deleteBtn);

  return card;
}

function todoDetailsView(todo, index, projectIndex) {
  const div = document.createElement("div");
  div.classList.add("todo-details-view");
  const form = document.createElement("form");
  form.classList.add("edit-todo-form");
  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Title: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = todo.name;
  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description: ";
  const descriptionInput = document.createElement("textarea");
  descriptionInput.value = todo.description;
  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Date: ";

  const dateValue = new Date(todo.dueDate);
  const day = ("0" + dateValue.getDate()).slice(-2);
  const month = ("0" + (dateValue.getMonth() + 1)).slice(-2);
  const value = dateValue.getFullYear() + "-" + month + "-" + day;
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = value;

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority: ";

  const priorityInput = document.createElement("select");
  priorityInput.name = "priorities";
  priorityInput.id = "priorities";
  const priorities = ["low", "medium", "high"];
  priorities.forEach((p) => {
    const option = document.createElement("option");
    option.textContent = p;
    option.value = p;
    priorityInput.appendChild(option);
  });
  priorityInput.value = todo.priority;

  const change = document.createElement("button");
  change.textContent = "Change";

  change.addEventListener("click", () => {
    app.projects[projectIndex].todos[index].setTitle(nameInput.value);
    app.projects[projectIndex].todos[index].setDescription(
      descriptionInput.value
    );
    app.projects[projectIndex].todos[index].setDueDate(dateInput.value);
    app.projects[projectIndex].todos[index].setPriority(priorityInput.value);
    render();
  });

  const close = document.createElement("button");
  close.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.removeChild(document.querySelector(".todo-details-view"));
  });
  close.textContent = "Close";

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  form.appendChild(change);
  form.appendChild(close);

  div.appendChild(form);

  return div;
}
