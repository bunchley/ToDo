"use strict";
let content = document.getElementById("content");

const text = {
  title: "Dead Lists Inc.",
  footer: "Death, punk and tasks. Find more:",
  projectTitle: "Dead Lists",
  defaultProject: "Default Dead",
  addProject: "Add Dead List",
};
const icon = {
  gen: "fas",
  project: "fa-skull",
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
  const icon = createDiv("i", "fas", link);
  icon.classList.add("fa-skull");
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

  const addProject = createDiv("button", "add-project", projectList);
  addButtonIcon(`${icon.gen}`, `${icon.project}`, addProject, text.addProject);
};

const createPreview = () => {
  const main = document.querySelector(".main");
  const preview = createDiv("div", "preview", main);
  const previewTitle = createDiv("h1", "preview-title", preview);
  previewTitle.innerHTML = "Hello preview title you have arrived!!";
};

const displayProject = (target) => {
  console.log("preview created");
  const title = document.querySelector(".preview-title");

  title.innerHTML = target.textContent;
};

const createPage = () => {
  createHeader();
  createSideBar();
  createPreview();
  createFooter();
};

export { createPage, displayProject };
