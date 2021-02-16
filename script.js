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
  newToDo.innerText = 'hey';
  newToDo.classList.add('todo-item');
  todoDiv.appendChild(newToDo);
  const completedBtn = document.createElement('button');
  completedBtn.innerText = 'Complete';
  completedBtn.classList.add('complete-btn');
  todoDiv.appendChild(completedBtn);
  const trashBtn = document.createElement('button');
  trashBtn.innerText = 'Trash';
  trashBtn.classList.add('trash-btn');
  todoDiv.appendChild(trashBtn);
  todoList.appendChild(todoDiv);
}

//Event Listeners
todoButton.addEventListener('click', addToDo);
