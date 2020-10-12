let formTask = document.getElementById('formTask');
formTask.addEventListener('submit', saveTask);

function saveTask(e) {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        title,
        description
    };
    
    console.log(task)
    e.preventDefault();
}