export default class Todo {
    constructor(title="Untitled", description=null, dueDate=null, priority="low") {
      this.setTitle(title);
      this.setDescription(description);
      this.setDueDate(dueDate);
      this.setPriority(priority);
      this.isCompleted = false;
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
    setCompleted(value){
      this.isCompleted = value;
    }
  }