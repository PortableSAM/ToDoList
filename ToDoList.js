const eventForm = document.querySelector('.ToDoList');
const eventInput = document.querySelector('input');
const eventList = document.querySelector('.tasksBoard');

const Events_LS = 'events';

let events = [];

function saveEvents() {
    localStorage.setItem(Events_LS, JSON.stringify(events));
}

function paintEvent(task) {
    const li = document.createElement('li');
    const delBth = document.createElement('button');
    const span = document.createElement('span');
    const newId = events.length + 1;
    delBth.innerText = 'x';
    delBth.addEventListener('click', deleteEvent);
    span.innerText = text;
    li.appendChild(delBth);
    li.appendChild(span);
    li.id = newId;
    eventList.appendChild(li);
    const eventObj = {
        text: text,
        id: newId,
    };
    eventList.push(eventObj);
    saveEvents();
}


function init() {
    loadEvents();
}

init();