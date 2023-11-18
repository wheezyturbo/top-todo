export default class Todo {
    constructor(title, description, dueDate, priority) {
      this.setTitle(title);
      this.setDescription(description);
      this.setDueDate(dueDate);
      this.setPriority(priority);
    }
    setTitle(title) {
      this.title = title;
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
  }