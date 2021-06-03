import {
  toggleAddProjectButton,
  addProjectToDOM,
  newTaskDOM,
} from "./interface.js";
let project = 0;

function Project(name) {
  this.name = name;
}

const createTodo = () => {
  console.log("add project button selected");
};

const createProject = (projectName) => {
  console.log("Add Dead List Selected");
  const newProject = new Project(projectName);
  console.log({ newProject });

  project++;
  return;
};

const addProjectSequence = (projectName) => {
  createProject(projectName);
  addProjectToDOM(projectName);
};
const addTaskToProject = (project) => {
  newTaskDOM(project);
};

export { createTodo, createProject, addProjectSequence, addTaskToProject };
