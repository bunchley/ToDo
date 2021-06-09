import {
  toggleAddProjectButton,
  addProjectToDOM,
  newTaskDOM,
} from "./interface.js";

class Todo {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Default"));
  }
  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }
  addProject(project) {
    this.projects.push(project);
  }
}

import Project from "./modules/project.js";
let projectCount = 0;

const createTodo = () => {
  console.log("add project button selected");
};

const createProject = (projectName) => {
  console.log("Add Dead List Selected");
  const newProject = new Project(projectName);
  console.log({ newProject });

  projectCount++;
  return;
};

const addProjectSequence = (projectName) => {
  createProject(projectName);
  addProjectToDOM(projectName);
};
const addTaskToProject = (projectName) => {
  newTaskDOM(projectName);
};

export { createTodo, createProject, addProjectSequence, addTaskToProject };
