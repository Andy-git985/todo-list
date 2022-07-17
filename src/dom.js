const dom = (() => {
  const omit = (obj, ...props) => {
    const result = { ...obj };
    props.forEach(function (prop) {
      delete result[prop];
    });
    return result;
  };
  const clear = (selector) => {
    document.querySelector(selector).textContent = '';
  };
  const projBoilerPlate = (selector) => {
    const label = document.createElement('label');
    label.setAttribute('for', 'project');
    label.textContent = 'Project';
    document.querySelector(selector).appendChild(label);
    const select = document.createElement('select');
    select.setAttribute('name', 'project');
    const option = document.createElement('option');
    option.setAttribute('value', '');
    option.textContent = 'Select one';
    select.appendChild(option);
    select.insertAdjacentElement('beforebegin', label);
    return select;
  };
  const createButton = (className) => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    button.setAttribute('button', 'button');
    button.classList.add(className.toLowerCase());
    button.textContent = className;
    div.appendChild(button);
    return div;
  };
  const getIdArr = (arr) => {
    return arr.map((e) => e.id);
  };
  const filterOutId = (arr) => {
    return arr.map((e) => omit(e, 'id'));
  };
  const render = (selector, arr) => {
    clear(selector);
    const todos = document.querySelector(selector);
    const idArr = getIdArr(arr);
    const filterArr = filterOutId(arr);
    for (const [i, obj] of Object.entries(filterArr)) {
      const outerDiv = document.createElement('div');
      outerDiv.dataset.id = idArr[i];
      for (const [key, value] of Object.entries(obj)) {
        const innerDiv = document.createElement('div');
        innerDiv.textContent = `${key}: ${value}`;
        outerDiv.appendChild(innerDiv);
      }
      outerDiv.appendChild(createButton('Update'));
      outerDiv.appendChild(createButton('Delete'));
      todos.appendChild(outerDiv);
    }
  };
  const renderAllTab = () => {
    const div = document.createElement('div');
    div.id = 'allBtn';
    div.textContent = 'All';
    return div;
  };
  const renderProjectTab = (selector, arr) => {
    clear(selector);
    const project = document.querySelector(selector);
    project.appendChild(renderAllTab());
    for (const i of arr) {
      const div = document.createElement('div');
      div.textContent = i;
      div.classList.add('filterBtn');
      project.appendChild(div);
    }
  };
  const renderFormProjects = (selector, arr) => {
    clear(selector);
    const formProject = document.querySelector(selector);
    const select = projBoilerPlate(selector);
    for (const [key, value] of Object.entries(arr)) {
      const option = document.createElement('option');
      option.dataset.index = key;
      option.setAttribute('value', value);
      option.textContent = value;
      select.appendChild(option);
    }
    formProject.appendChild(select);
  };
  return { render, renderProjectTab, renderFormProjects };
})();

export default dom;
