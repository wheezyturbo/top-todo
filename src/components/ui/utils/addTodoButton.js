import Todo from "../../core/todo";
import { projects } from "../../core/projects";
import { renderProjectCards } from "./main";

export default function addTodoButton() {
  const button = document.createElement("button");
  button.classList.add("add-todo-button");
  button.textContent = "+";

  button.addEventListener("click", (e) => {
    if (document.querySelector(".add-todo-div")) {
      document.body.removeChild(document.querySelector(".add-todo-div"));
    }
    document.body.appendChild(addTodoCard());
  });
  return button;
}

function addTodoCard(project) {
  const div = document.createElement("div");
  div.classList.add("add-todo-div");
  const nameLabel = document.createElement("h3");
  nameLabel.textContent = "Name:";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  const descLabel = document.createElement("h3");
  descLabel.textContent = "Description:";
  const descInput = document.createElement("textarea");
  const dateLabel = document.createElement("h3");
  dateLabel.textContent = "Date:";
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  const priorityLabel = document.createElement("h2");
  priorityLabel.textContent = "Priority:";
  const priorityInput = document.createElement("h2");
  priorityInput.type = "text";
    const submitBtn = document.createElement('button');
    submitBtn.textContent = "Add";
    submitBtn.addEventListener('click',()=>{
    const projectIndex = document.querySelector('.card')?.getAttribute('data-parent-index');
    // bug: cannot add a todo item inside a project with no todos
    // the above code works only if there is atleast a single card in that project;
    projects[projectIndex].todos.push(new Todo(nameInput.value,descInput.value,dateInput.value,priorityInput.value));
    renderProjectCards(projects[projectIndex],projectIndex);
    document.body.removeChild(document.querySelector('.add-todo-div'));
    console.log(projects);

    })
    const close = document.createElement('button');
    close.textContent = "X";
    close.classList.add('close-btn');
    close.addEventListener('click',()=>{
        document.body.removeChild(document.querySelector('.add-todo-div'));
    })
  div.appendChild(nameLabel);
  div.appendChild(nameInput);
  div.appendChild(descLabel);
  div.appendChild(descInput);
  div.appendChild(dateLabel);
  div.appendChild(dateInput);
  div.appendChild(priorityLabel);
  div.appendChild(priorityInput);
  div.appendChild(submitBtn);
  div.appendChild(close);

  return div;
}
