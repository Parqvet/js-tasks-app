let formTask = document.getElementById('formTask');
formTask.addEventListener('submit', saveTask);

function saveTask(e) {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        title,
        description
    };

    if (localStorage.getItem('tasksLocals') === null) {
        let tasksLocals = [];
        tasksLocals.push(task);

        localStorage.setItem('tasksLocals', JSON.stringify(tasksLocals));

    } else {
        let newTasks = JSON.parse(localStorage.getItem('tasksLocals'));
        newTasks.push(task);
 
        localStorage.setItem('tasksLocals', JSON.stringify(newTasks));
    }

    getTask();
    document.getElementById('form-Task').reset();
    e.preventDefault();
}

function getTask() {
    let tasksUI = JSON.parse(localStorage.getItem('tasksLocals'));
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = '';

    for(let i = 0; i < tasksUI.length; i++) {
        let title = tasksUI[i].title;
        let description = tasksUI[i].description;

        tasksView.innerHTML += `<div class="card mb-3">
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">Delete</a>
            </div>
        </div>`
    }
}

function deleteTask(title) {
    let tasksOff = JSON.parse(localStorage.getItem('tasksLocals'));

    for(let i = 0; i < tasksOff.length; i++) {
        if (tasksOff[i].title == title) {
            tasksOff.splice(i, 1);
        }
    }
    localStorage.setItem('tasksLocals', JSON.stringify(tasksOff));
    getTask();
}

getTask();