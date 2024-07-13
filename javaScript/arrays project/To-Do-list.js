const todoList = [
  ];

renderTodoList()

function renderTodoList() {
  let todoHTML = '';

      // Save the data
  for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      // const name = todoObject.name;
      // const dueDate = todoObject.dueDate;

      const {name, dueDate} = todoObject;

      // save it as html
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
           
        <button onclick="deleteToDo(${i});" class="deleteButton">
        delete</button>`; 
      todoHTML += html; // and update it
  }
  
  document.querySelector('.js-todo-list').innerHTML = todoHTML; //Generate html through JS
}

function deleteToDo(i) {
  todoList.splice(i,1);
  renderTodoList();
}



function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value 

  const dateElement = document.querySelector('.js-date-input');
  const dueDate = dateElement.value

  todoList.push({name,dueDate});

  inputElement.value = '';
  dateElement.value = '';

  

  renderTodoList()
}

