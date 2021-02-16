//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Functions
function addToDo(event) {
  event.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
  newToDo.classList.add('todo-item');
  todoDiv.appendChild(newToDo);
  const completedBtn = document.createElement('button');
  completedBtn.innerText = 'Complete';
  completedBtn.classList.add('complete-btn');
  newToDo.appendChild(completedBtn);
  const trashBtn = document.createElement('button');
  trashBtn.innerText = 'Trash';
  trashBtn.classList.add('trash-btn');
  todoDiv.appendChild(trashBtn);
  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

//Event Listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
