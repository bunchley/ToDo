"use strict";
let content = document.getElementById("content");

const text = {
  title: "List for the Dead",
  footer: "Death, punk and tasks. Find more:",
  projectTitle: "Projects of the Dead",
};

const createDiv = (type, elementClass, appendTo) => {
  const element = document.createElement(`${type}`);
  element.classList.add(`${elementClass}`);
  appendTo.appendChild(element);
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
  const projectList = createDiv("div", "project-list");
};

export { createHeader, createFooter, createSideBar };
