import Project from "./project";
import Todo from "./todo";
const projects = [];
const project1 = new Project("helo");

const taskNames = ["Task A", "Task B", "Task C", "Task D", "Task E", "Task F"];
const priorities = ["low", "medium", "high"];
const descriptions = ["Description 1", "Description 2", "Description 3"];
const dueDates = [
  "2022-01-01",
  "2022-02-15",
  "2022-03-20",
  "2022-04-10",
  "2022-05-05",
  "2022-06-30"
];

for (let i = 0; i < 6; i++) {
  const randomNameIndex = Math.floor(Math.random() * taskNames.length);
  const randomPriorityIndex = Math.floor(Math.random() * priorities.length);
  const randomDescriptionIndex = Math.floor(Math.random() * descriptions.length);
  const randomDateIndex = Math.floor(Math.random() * dueDates.length);

  const randomName = taskNames[randomNameIndex];
  const randomPriority = priorities[randomPriorityIndex];
  const randomDescription = descriptions[randomDescriptionIndex];
  const randomDate = dueDates[randomDateIndex];

  project1.addTodo(new Todo(randomName, randomDescription, randomDate, randomPriority));
}

// Add more todos...
projects.push(project1);

const project2 = new Project("world");
project2.addTodo(new Todo("blah", "adsklfa;sdkljfasdjd", "2023-10-23", "high"));
project2.addTodo(new Todo("blah", "adsklfa;sdkljfasdjd", "2023-10-23", "high"));
// Add more todos...
projects.push(project2);

export {projects};