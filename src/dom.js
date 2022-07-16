const dom = (() => {
  const clear = (selector) => {
    document.querySelector(selector).textContent = '';
  };
  const render = (selector, arr) => {
    clear(selector);
    const todos = document.querySelector(selector);
    for (const obj of arr) {
      const outerDiv = document.createElement('div');
      if (typeof obj !== 'string') {
        for (const [key, value] of Object.entries(obj)) {
          const innerDiv = document.createElement('div');
          innerDiv.textContent = `${key}: ${value}`;
          outerDiv.appendChild(innerDiv);
        }
      } else {
        outerDiv.textContent = obj;
      }
      todos.appendChild(outerDiv);
    }
  };
  const renderFormProjects = (selector, arr) => {
    const projects = document.querySelector(selector);
    const label = document.createElement('label');
    label.setAttribute('for', 'projects');
    const select = document.createElement('select');
    select.setAttribute('name', 'projects');
    const option = document.createElement('option');
    option.textContent = 'Select one';
    select.appendChild(option);
    for (const [key, value] of Object.entries(arr)) {
      const option = document.createElement('option');
      option.dataset.index = key;
      option.textContent = value;
      select.appendChild(option);
    }
    projects.appendChild(select);
  };
  return { render, renderFormProjects };
})();

export default dom;
