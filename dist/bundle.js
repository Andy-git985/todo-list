/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const todoItem = (title, description, dueDate, priority) => {\r\n  const completed = false;\r\n  return { title, description, dueDate, priority, completed };\r\n};\r\n\r\nconst toDoList = [];\r\nconst projects = [];\r\nconst createToDoItem = (...item) => {\r\n  const newItem = todoItem(...item);\r\n  return newItem;\r\n};\r\n\r\nconst addToDoItem = (item) => {\r\n  toDoList.push(item);\r\n};\r\n\r\nconst newItem = createToDoItem(\r\n  'clean',\r\n  'clean the place',\r\n  new Date(2022, 6, 14),\r\n  'Not Urgent'\r\n);\r\n\r\naddToDoItem(newItem);\r\naddToDoItem(\r\n  createToDoItem(\r\n    'returns',\r\n    'return my online shopping',\r\n    new Date(2022, 6, 17),\r\n    'Urgent'\r\n  )\r\n);\r\n\r\nconst printToDo = (arr) => {\r\n  arr.forEach((obj) => {\r\n    Object.values(obj).forEach((v) => console.log(v));\r\n  });\r\n};\r\n// toDoList.forEach(obj => Object.entries(obj).forEach(v => console.log(v)))\r\n// toDoList.forEach(obj => Object.entries(obj).forEach(([key, value]) => console.log(key, value)))\r\n\r\nconst domStuff = (() => {\r\n  const render = () => {\r\n    const todos = document.querySelector('#todos');\r\n    for (const obj of toDoList) {\r\n      const outerDiv = document.createElement('div');\r\n      for (const [key, value] of Object.entries(obj)) {\r\n        const innerDiv = document.createElement('div');\r\n        innerDiv.textContent = `${key}: ${value}`;\r\n        outerDiv.appendChild(innerDiv);\r\n      }\r\n      todos.appendChild(outerDiv);\r\n    }\r\n  };\r\n  return { render };\r\n})();\r\n\r\ndomStuff.render();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;