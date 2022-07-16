import './style.css';
import dom from './dom.js';

const todoItem = (
  title,
  description,
  dueDate,
  priority,
  progress,
  projects
) => {
  return { title, description, dueDate, priority, progress, projects };
};

const toDoList = [];

const createToDoItem = (...item) => {
  const newItem = todoItem(...item);
  return newItem;
};

const addToDoItem = (item) => {
  toDoList.push(item);
};

// const newItem = createToDoItem(
//   'clean',
//   'clean the place',
//   '2022'
//   'Not Urgent'
// );

// s
// addToDoItem(
//   createToDoItem(
//     'returns',
//     'return my online shopping',
//     new Date(2022, 6, 17),
//     'Urgent'
//   )
// );

const newItem = createToDoItem(
  'clean',
  'clean the place',
  '2022-08-21',
  'low',
  'todo',
  ''
);
addToDoItem(newItem);
addToDoItem(
  createToDoItem(
    'todo list',
    'finish todo list',
    '2022-07-17',
    'high',
    'doing',
    'software developement'
  )
);

const printToDo = (arr) => {
  arr.forEach((obj) => {
    Object.values(obj).forEach((v) => console.log(v));
  });
};

// ? Projects
const projects = [];
const createNewProject = (item) => {
  projects.push(item);
};

createNewProject('software development');
createNewProject('fitness');
dom.render('#projects', projects);
dom.renderFormProjects('#formProjectElem', projects);

// ? Dom stuff

const eventListeners = () => {
  const addProject = document.querySelector('#addProject');
  addProject.addEventListener('click', () => {
    const newProject = document.querySelector('#newProject');
    createNewProject(newProject.value);
    dom.render('#projects', projects);
    dom.renderFormProjects('#formProjectElem', projects);
  });
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = [...new FormData(form)].map(([k, v]) => v);
    console.log(formData);
    addToDoItem(formData);
    dom.render('#todos', toDoList);
  });
};

eventListeners();
