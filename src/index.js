import './style.css';
import dom from './dom.js';

const random = (length = 8) => {
  return Math.random().toString(16).substr(2, length);
};

// ! main function
const todoItem = (title, description, dueDate, priority, progress, project) => {
  // const id = () => random();
  // const getId = () => _id();
  return { title, description, dueDate, priority, progress, project };
};

// ! main array
const toDoList = [];

// ! item and id function
const createToDoItem = (...item) => {
  const newItem = todoItem(...item);
  return Object.assign({}, newItem, id());
};

const addToDoItem = (item) => {
  toDoList.push(item);
};

// ! ids
const id = () => {
  const value = random();
  const result = { id: value };
  return Object.assign({}, result);
};

// ! Projects
const projects = [];
const createNewProject = (item) => {
  projects.push(item);
};
const filterProject = (query) => toDoList.filter((e) => e.project === query);

// ! Refresh
const refreshFormsTabs = () => {
  dom.renderProjectTab('#projects', projects);
  dom.renderFormProjects('#formProjectElem', projects);
  eventListeners();
};

// ! Events
const eventListeners = () => {
  const addForm = document.querySelector('#addForm');
  const addProject = document.querySelector('#addProject');
  const allBtn = document.querySelector('#allBtn');
  const filterBtn = document.querySelectorAll('.filterBtn');
  const deleteBtn = document.querySelectorAll('.delete');

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = [...new FormData(form)].map(([k, v]) => v);
    addToDoItem(createToDoItem(...formData));
    dom.render('#todos', toDoList);
    refreshFormsTabs();
  });

  addProject.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const value = String([...new FormData(form)].map(([k, v]) => v));
    if (projects.includes(value)) return;
    createNewProject(value);
    refreshFormsTabs();
  });

  allBtn.addEventListener('click', () => dom.render('#todos', toDoList));

  filterBtn.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      const query = e.target.textContent;
      dom.render('#todos', filterProject(query));
    })
  );

  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.parentElement.parentElement.dataset.id;
      const search = toDoList.find((e) => e.id === id);
      toDoList.splice(toDoList.indexOf(search), 1);
      dom.render('#todos', toDoList);
      refreshFormsTabs();
    });
  });
};

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
    'software development'
  )
);
addToDoItem(
  createToDoItem(
    'sledding',
    'increase sledding weight by 30lbs.',
    '2022-08-21',
    'medium',
    'doing',
    'fitness'
  )
);

createNewProject('software development');
createNewProject('fitness');
dom.renderProjectTab('#projects', projects);
dom.renderFormProjects('#formProjectElem', projects);

dom.render('#todos', toDoList);
eventListeners();

// console.log(idList);
// const todos = document.querySelector('#todos');
// for (let i = 0; i < todos.children.length; i++) {
//   todos.children[i].dataset.id = idList[i];
// }
