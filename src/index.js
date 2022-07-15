const todoItem = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
  };
};

// const myLife = todoItem(
//   'my life',
//   'delete information off of my life website',
//   new Date(2022, 7, 21),
//   'Urgent'
// );

const toDoList = [];
const createToDoItem = (...item) => {
  const newItem = todoItem(...item);
  // console.log(newItem.getTitle());
  // console.log(newItem.getDescription());
  // console.log(newItem.getDueDate());
  // console.log(newItem.getPriority());
  return newItem;
};

const addToDoItem = (item) => {
  toDoList.push(item);
};

const newItem = createToDoItem(
  'clean',
  'clean the place',
  new Date(2022, 7, 14),
  'Not Urgent'
);

addToDoItem(newItem);
addToDoItem(
  createToDoItem(
    'returns',
    'return my online shopping',
    new Date(2022, 7, 17),
    'Urgent'
  )
);

const addNewProject = (name) => toDoList.push({ name });

const printToDo = (arr) => {
  arr.forEach((obj) => {
    Object.values(obj).forEach((func) => console.log(func()));
  });
};

printToDo(toDoList);
