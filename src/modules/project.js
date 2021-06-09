class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setTask(tasks) {
    this.tasks = tasks;
  }
}

export default Project;
