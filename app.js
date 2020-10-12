let formTask = document.getElementById('formTask');
formTask.addEventListener('submit', saveTask);

function saveTask(e) {

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    // Almaceno en variables los valores obtenidos y los guardo en un objeto
    const task = {
        title,
        description
    };

    // Con el metodo setItem guardo los valores del objeto en el localStorage
    //Luego con el metodo stringify del objeto JSON convierto al objeto en cadena de texto
    localStorage.setItem('tasks', JSON.stringify(task));
    //Obtengo por consola la clave 'tasks' guardada en el localStorage con el metodo getItem
    console.log(localStorage.getItem('tasks'));
    // Con el metodo parse puedo volver a pasar a objeto la clave 'tasks' que habia transformado en string
    // Luego a estos objetos los voy a almacenar en un array
    console.log(JSON.parse(localStorage.getItem('tasks')));
    console.log(task.description);

    e.preventDefault();
}