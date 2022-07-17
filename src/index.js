import './style.css';
import dom from './dom.js';

const random = (length = 8) => {
  return Math.random().toString(16).substr(2, length);
};

const todoItem = (title, description, dueDate, priority, progress, project) => {
  const id = () => random();
  // const getId = () => _id();
  return { title, description, dueDate, priority, progress, project, id };
};

const toDoList = [];

const createToDoItem = (...item) => {
  const newItem = todoItem(...item);
  return newItem;
};

const addToDoItem = (item) => {
  toDoList.push(item);
};

const printToDo = (arr) => {
  arr.forEach((obj) => {
    Object.values(obj).forEach((v) => console.log(v));
  });
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
      console.log(e.target.parentElement.parentElement);
      const id = e.target.parentElement.parentElement.dataset.id;
      console.log(id);
      const search = toDoList.map((e) => e.id);
      console.log(search);
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
