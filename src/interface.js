"use strict";

import { createProject } from "./todoMgmt";

let content = document.getElementById("content");

const text = {
  title: "Dead Lists Inc.",
  footer: "Death, punk and tasks. Find more:",
  projectTitle: "Dead Lists",
  defaultProject: "Default Dead",
  addProject: "Add Dead List",
  addNameProject: "Add Dead List Name..",
  newTask: "New Task",
};
const icon = {
  gen: "fas",
  project: "fa-skull",
  task1: "fas",
  task2: "fa-bone",
};

const createDiv = (type, elementClass, appendTo) => {
  const element = document.createElement(`${type}`);
  element.classList.add(`${elementClass}`);
  appendTo.appendChild(element);
  return element;
};
const addButtonIcon = (class1, class2, appendTo, text) => {
  const element = document.createElement("i");
  element.classList.add(`${class1}`);
  element.classList.add(`${class2}`);
  appendTo.appendChild(element);

  const span = document.createElement("span");
  span.innerHTML = text;
  appendTo.appendChild(span);

  return element;
};

const createAddNewProject = () => {
  const nav = document.querySelector(".nav");
  const newName = createDiv("div", "add-new-project", nav);
  const input = createDiv("input", "add-new-project-input", newName);
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", text.addNameProject);
  // input.setAttribute("value", "text");
  const divButton = createDiv("button", "addNewProjectButton", newName);
  divButton.setAttribute("id", "new-project-submit");
  addButtonIcon("fas", "fa-sign-in-alt", divButton, "");
  newName.classList.add("dead");
};

const createHeader = () => {
  const header = createDiv("div", "header", content);
  const logo = createDiv("div", "logo", header);
  const logoImage = createDiv("i", "fas", logo);
  logoImage.classList.add("fa-book-dead");

  const title = createDiv("h1", "title", logo);
  title.innerHTML = text.title;
};

const createFooter = () => {
  const footer = createDiv("footer", "footer", content);
  const footText = createDiv("p", "footer-text", footer);
  footText.innerHTML = text.footer;
  const link = createDiv("a", "github-link", footer);
  link.setAttribute("href", "https://github.com/bunchley");
  addButtonIcon(`${icon.gen}`, `${icon.project}`, link, "");
};

const createSideBar = () => {
  const main = createDiv("main", "main", content);
  const nav = createDiv("nav", "nav", main);
  const projectTitle = createDiv("h1", "project-title", nav);
  projectTitle.innerHTML = text.projectTitle;
  const projectList = createDiv("div", "project-list", projectTitle);
  const defaultProject = createDiv("button", "button-project", projectList);
  addButtonIcon(
    `${icon.gen}`,
    `${icon.project}`,
    defaultProject,
    text.defaultProject
  );
  createProject("default");

  const addProject = createDiv("button", "add-project", projectList);
  addButtonIcon(`${icon.gen}`, `${icon.project}`, addProject, text.addProject);
};

const createPreview = () => {
  const main = document.querySelector(".main");
  const preview = createDiv("div", "preview", main);
  const previewTitle = createDiv("h1", "preview-title", preview);
  previewTitle.innerHTML = "Hello preview title you have arrived!!";
  const task = createDiv("div", "task-list", preview);
  const newTask = createDiv("button", "add-task", preview);
  console.log("adding button");
  addButtonIcon(`${icon.task1}`, `${icon.task2}`, newTask, text.newTask);
};

const displayProject = (target) => {
  console.log("preview created");
  const title = document.querySelector(".preview-title");

  title.innerHTML = target.textContent;
};

const toggleAddProjectButton = () => {
  const addButton = document.querySelector(".add-project");
  const addInputContainer = document.querySelector(".add-new-project");
  console.log("addButton", addButton);
  if (addButton.classList.contains("dead")) {
    console.log("contains dead");
    addButton.classList.toggle("dead");
  } else if (!addButton.classList.contains("dead")) {
    console.log("adding dead");
    addButton.classList.add("dead");
    addInputContainer.classList.remove("dead");
  }
};

const addProjectToDOM = (name) => {
  console.log("adding new project to DOM", name);
  const projectList = document.querySelector(".project-list");
  const newProject = createDiv("button", "button-project", projectList);
  addButtonIcon(`${icon.gen}`, `${icon.project}`, newProject, name);
};

const createPage = () => {
  createHeader();
  createSideBar();
  createAddNewProject();
  createPreview();
  createFooter();
};

export { createPage, toggleAddProjectButton, displayProject, addProjectToDOM };
