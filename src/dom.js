const dom = (() => {
  const clear = (selector) => {
    document.querySelector(selector).textContent = '';
  };
  const projBoilerPlate = (selector) => {
    const label = document.createElement('label');
    label.setAttribute('for', 'projects');
    label.textContent = 'Project';
    document.querySelector(selector).appendChild(label);
    const select = document.createElement('select');
    select.setAttribute('name', 'projects');
    const option = document.createElement('option');
    option.setAttribute('value', '');
    option.textContent = 'Select one';
    select.appendChild(option);
    select.insertAdjacentElement('beforebegin', label);
    return select;
  };
  const render = (selector, arr) => {
    clear(selector);
    const todos = document.querySelector(selector);
    for (const obj of arr) {
      const outerDiv = document.createElement('div');
      if (typeof obj !== 'string') {
        for (const [key, value] of Object.entries(obj)) {
          const innerDiv = document.createElement('div');
          console.log(typeof value);
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
    clear(selector);
    const projects = document.querySelector(selector);
    const select = projBoilerPlate(selector);
    for (const [key, value] of Object.entries(arr)) {
      const option = document.createElement('option');
      option.dataset.index = key;
      option.setAttribute('value', value);
      option.textContent = value;
      select.appendChild(option);
    }
    projects.appendChild(select);
  };
  return { render, renderFormProjects };
})();

export default dom;
