// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

/*document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});*/

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event  listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    
    // remove task event
    taskList.addEventListener('click', removeTask);
    
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
    
    // filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Add Task  
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
    
    // Create li element
    const li = document.createElement('li');
    
    // Add class
    li.className = 'collection-item';
    
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
                   
    // Creat new link element
    const link = document.createElement('a');
    
    // Add class
    link.className = 'delete-item secondary-content';
    
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></li>'; 
    
    // append link to li
    li.appendChild(link);
    
    // append li to ul
    taskList.appendChild(li);
    
    // clear input
    taskInput.value = '';
    
    e.preventDefault();  
}

// Store task
function storeTaskInLocalStorage(task) {
     let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.push(task);
    
    localStorage.setItem('tasks', JSON.strigify(tasks));
}

// Remove task

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clear tasks

function clearTasks(e){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// filter tasks

function filterTasks(e){
    const text = e.target.value;
    
    document.querySelectorAll('.collection-item').forEach(function(task) {
      const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
             task.style.display = 'none';
        }
});
}
