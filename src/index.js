import './style.css';
import dom from './dom.js';

const random = (length = 8) => {
  return Math.random().toString(16).substr(2, length);
};

const todoItem = (title, description, dueDate, priority, progress, project) => {
  const _id = () => random();
  const getId = () => _id;
  return { title, description, dueDate, priority, progress, project, getId };
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
const filterProject = (query) => toDoList.filter((e) => e.project === query);

createNewProject('software development');
createNewProject('fitness');
dom.renderProjectTab('#projects', projects);
dom.renderFormProjects('#formProjectElem', projects);

// ? Dom stuff

const eventListeners = () => {
  const addForm = document.querySelector('#addForm');
  const addProject = document.querySelector('#addProject');
  const filterBtn = document.querySelectorAll('.filterBtn');
  const deleteBtn = document.querySelectorAll('.delete');

  addProject.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const value = String([...new FormData(form)].map(([k, v]) => v));
    if (projects.includes(value)) return;
    createNewProject(value);
    dom.renderProjectTab('#projects', projects);
    dom.renderFormProjects('#formProjectElem', projects);
  });

  filterBtn.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      const query = e.target.textContent;
      dom.render('#todos', filterProject(query));
    })
  );

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = [...new FormData(form)].reduce((o, [k, v]) => {
      o[k] = v;
      return o;
    }, {});
    addToDoItem(formData);
    dom.render('#todos', toDoList);
  });
};
dom.render('#todos', toDoList);
eventListeners();
