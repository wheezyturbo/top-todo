export default class Todo {
  constructor(name, description, date, priority) {
    // this.name = name;
    // this.description = description;
    // this.date = date;
    // this.priority = priority;
    // this.isCompleted = false;
    this.setTitle(name);
    this.setDescription(description);
    this.setDueDate(date);
    this.setPriority(priority?priority:"low");
    this.setCompleted(false);

  }
  setTitle(name) {
    this.name = name;
  }
  setDescription(description) {
    this.description = description;
  }
  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  setPriority(priority) {
    this.priority = priority;
  }
  setCompleted(value) {
    this.isCompleted = value;
  }
}
