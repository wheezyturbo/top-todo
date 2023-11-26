import Todo from "../../core/Todo/Todo";
import app from "../../core/app";
import render from "../../core/render/render";

// Function to create and append elements
function createAndAppend(parent, elementType, className, textContent,type=null) {
  const element = document.createElement(elementType);
  if (className) {
    element.classList.add(className);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if(type){
    element.type = type;
  }
  parent.appendChild(element);
  return element;
}

// Function to show the modal
function showModal() {
  console.log(app.currentPage);
  if (app.currentPage == "home") {
    alert("Click on a project to add a new todo!");
    return;
  }
  if(document.getElementById('todoModal')){
    const modal = document.getElementById('todoModal');
    modal.style.display=="none"?modal.style.display="block":modal.style.display="none";
    return;
  }
  const modal = createAndAppend(document.body, "div", "modal", "");
  modal.id = "todoModal";

  const modalContent = createAndAppend(modal, "div", "modal-content", "");

  createAndAppend(modalContent, "button", "close", "X").addEventListener(
    "click",
    () => {
      modal.style.display = "none";
    }
  );
  const titleLabel = document.createElement('label');
  titleLabel.textContent="Title: ";
  modalContent.appendChild(titleLabel);
  createAndAppend(modalContent, "input", "", "").id = "titleInput";
  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent="Description: ";
  modalContent.appendChild(descriptionLabel);
  createAndAppend(modalContent, "input", "", "").id = "descriptionInput";
  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent="Due Date:";
  modalContent.appendChild(dueDateLabel);
  createAndAppend(modalContent, "input", "", "","date").id = "dateInput";
  // createAndAppend(modalContent, "input", "", "").id = "priorityInput";

  const priorityLabel = document.createElement('label');
  priorityLabel.textContent="Priority:";
  modalContent.appendChild(priorityLabel);

  const priorityDropDown = document.createElement('select');
  priorityDropDown.name = "priorities";
  priorityDropDown.id = "priorities";
  const priorities = ["low","medium","high"];
  priorities.forEach(p=>{
    const option = document.createElement('option');
    option.textContent = p;
    option.value = p;
    priorityDropDown.appendChild(option);
  })

  modalContent.appendChild(priorityDropDown);


  const addTodoBtn = createAndAppend(modalContent, "button", "", "Add Todo");
  addTodoBtn.id = "addTodoBtn";
  addTodoBtn.addEventListener("click", () => {

    const title = document.getElementById("titleInput").value;
    const description = document.getElementById("descriptionInput").value;
    const date = document.getElementById("dateInput").value;
    // const priority = document.getElementById("priorityInput").value;
    const priority = document.getElementById("priorities").value;

    // Adding the todo to the current project
    app.projects.forEach((project) => {
      if (project.title === app.currentPage) {
        project.addTodo(new Todo(title, description, date, priority));
        render();
      }
    });

    modal.style.display = "none";
  });

  modal.style.display = "block";
}

export default function AddTodoButton() {
  const button = createAndAppend(document.body, "button", "add-todo-btn", "+");
  button.addEventListener("click", showModal);
  return button;
}
