const addListBtn = document.querySelector('.new-list-btn');
const todoList = document.querySelector('.todo-list');
const listTitle = document.querySelector('.list-title');
const addItemBtn = document.querySelector('.new-todo-btn');

addListBtn.addEventListener('click', addList);
addItemBtn.addEventListener('click', addItem);
