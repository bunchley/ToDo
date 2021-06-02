import { createPage, displayProject } from "./interface.js";
import { createTodo, createProject } from "./todoMgmt.js";

createPage();

if (document.body.addEventListener) {
  document.body.addEventListener("click", handleClick, false);
} else {
  //for IE
  document.body.attachEvent("onclick", handleClick);
}

function handleClick(e) {
  console.log("Clicked: ", e);
  e = e || window.event;
  let target = e.target || e.srcElement;

  //event listener for project button
  if (target.className.match("button-project")) {
    displayProject(target);
  }
  //event listener for add project button
  if (target.className.match("add-project")) {
    createProject();
  }
}
