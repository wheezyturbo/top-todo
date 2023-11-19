import Project from "./project";
import Todo from "./todo";
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

export {projects};