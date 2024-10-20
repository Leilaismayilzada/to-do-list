let toDoButton = document.querySelector(".button");
let toDoInput = document.querySelector(".input");
let toDoUl = document.querySelector(".ul");

document.addEventListener("DOMContentLoaded", loadTasks);

toDoButton.addEventListener('click', () => {
    if (toDoInput.value === '') {
        alert("You must write something!");
    } else {
        createTaskElement(toDoInput.value);
        toDoInput.value = '';
        saveTasks(); 
    }
});

function createTaskElement(taskText) {
    var list = document.createElement('li');
    list.textContent = taskText;
    list.classList.add('paragraph_style');

    var checkBtns = document.createElement('button');
    checkBtns.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    checkBtns.classList.add('iconstyle', 'check-btn');

    var rmvBtns = document.createElement('button');
    rmvBtns.innerHTML = '<i class="fa-solid fa-eraser"></i>';
    rmvBtns.classList.add('iconstyle', 'delete-btn');

    list.appendChild(checkBtns);
    list.appendChild(rmvBtns);
    toDoUl.appendChild(list);

    checkBtns.addEventListener("click", () => {
        list.style.textDecoration = 'line-through';
        saveTasks(); 
    });

    rmvBtns.addEventListener("click", () => {
        list.remove();
        saveTasks(); 
    });
}

function saveTasks() {
    const tasks = [];
    toDoUl.querySelectorAll('li').forEach(item => {
        tasks.push(item.textContent.trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task));
}


