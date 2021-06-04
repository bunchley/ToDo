# ToDo

Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.

Brainstorm what kind of properties your todo-items are going to have. At a minimum they should have a
title, - DONE
description, - DONE
dueDate
priority.

You might also want to include
notes
checklist.

Your todo list should have projects or separate lists of todos.
When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. - DONE

Users should be able to create new projects and choose which project their todos go into.

You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules. - DONE

The look of the User Interface is up to you, but it should be able to do the following:
view all projects - DONE
view all todos in each project (probably just the title and duedate.. perhaps changing color for different priorities)
expand a single todo to see/edit its details
delete a todo

Use localStorage to save user’s projects and todos between sessions.
