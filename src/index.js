const todoItem = (title, description, dueDate, priority) => {
  const completed = false;
  return { title, description, dueDate, priority, completed };
};

const toDoList = [];
const projects = [];
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

const domStuff = (() => {
  const render = () => {
    const todos = document.querySelector('#todos');
    for (const obj of toDoList) {
      const outerDiv = document.createElement('div');
      for (const [key, value] of Object.entries(obj)) {
        const innerDiv = document.createElement('div');
        innerDiv.textContent = `${key}: ${value}`;
        outerDiv.appendChild(innerDiv);
      }
      todos.appendChild(outerDiv);
    }
  };
  return { render };
})();

domStuff.render();
