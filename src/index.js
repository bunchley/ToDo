import {
  createPage,
  displayProject,
  toggleAddProjectButton,
} from "./interface.js";
import { createTodo, addProjectSequence } from "./todoMgmt.js";

createPage();

if (document.body.addEventListener) {
  document.body.addEventListener("click", handleClick, false);
} else {
  //for IE
  document.body.attachEvent("onclick", handleClick);
}

function handleClick(e) {
  e = e || window.event;
  let target = e.target || e.srcElement;
  console.log("Clicked: ", target);

  //event listener for project button
  if (target.className.match("button-project")) {
    displayProject(target);
  }
  //event listener for add project button
  if (target.className.match("add-project")) {
    toggleAddProjectButton();
  }
  if (target.className.match("addNewProjectButton")) {
    console.log("enter button clicked");
    let projectNameInput = document.querySelector(
      ".add-new-project-input"
    ).value;
    console.log(projectNameInput);
    addProjectSequence(projectNameInput);
  }
}
