import './style.css';
import dom from './dom.js';

const todoItem = (title, description, dueDate, priority) => {
  const completed = false;
  return { title, description, dueDate, priority, completed };
};

const toDoList = [];

const createToDoItem = (...item) => {
  const newItem = todoItem(...item);
  return newItem;
};

const addToDoItem = (item) => {
  toDoList.push(item);
};

const newItem = createToDoItem(
  'clean',
  'clean the place',
  new Date(2022, 6, 14),
  'Not Urgent'
);

addToDoItem(newItem);
addToDoItem(
  createToDoItem(
    'returns',
    'return my online shopping',
    new Date(2022, 6, 17),
    'Urgent'
  )
);

const printToDo = (arr) => {
  arr.forEach((obj) => {
    Object.values(obj).forEach((v) => console.log(v));
  });
};
// toDoList.forEach(obj => Object.entries(obj).forEach(v => console.log(v)))
// toDoList.forEach(obj => Object.entries(obj).forEach(([key, value]) => console.log(key, value)))

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
document.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = [...new FormData(form)].map(([k, v]) => v);
  addToDoItem(formData);
  dom.render('#todos', toDoList);
});
