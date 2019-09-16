const taskForm = document.querySelector('.ToDoList'),
    taskInput = taskForm.querySelector('input'),
    tasksList = document.querySelector('.taskList');

const tasks_LS = 'tasks';

let tasks = [];

function deleteTask(event) {
    const btn = event.target;
    const li = btn.parentNode;
    tasksList.removeChild(li);
    const cleanTasks = tasks.filter(function (task) {
        return task.id !== parseInt(li.id);
    });
    tasks = cleanTasks;
    saveTasks();
}

function saveTasks() {
    localStorage.setItem(tasks_LS, JSON.stringify(tasks));
}

function paintTask(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = tasks.length + 1;
    delBtn.innerText = 'x';
    delBtn.addEventListener('click', deleteTask);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    tasksList = appendChild(li);
    const taskObj = {
        text: text,
        id: newId,
    };
    tasks.push(taskObj);
    saveTasks();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = taskInput.value;
    paintTask(currentValue);
    taskInput.value = '';
}

function loadTasks() {
    const loadedTasks = localStorage.getItem(tasks_LS);
    if (loadedTasks !== null) {
        const parsedTasks = JSON.parse(loadedTasks);
        parsedTasks.forEach(function (task) {
            paintTask(task.text);
        });
    }
}

function init() {
    loadTasks();
    taskForm.addEventListener('submit', handleSubmit);
}

init();