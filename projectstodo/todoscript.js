const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;
  
  const li = document.createElement('li');
  li.textContent = taskText;
  
  const delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  li.appendChild(delBtn);
  
  taskList.appendChild(li);
  taskInput.value = '';
}

function handleTaskClick(e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  } else {
    e.target.classList.toggle('completed');
  }
}