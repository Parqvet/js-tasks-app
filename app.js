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

    // Si desde localStorage ya existe una clave llamada 'tasks' y es igual a nulo, vamos a empezar a crear tareas
    if (localStorage.getItem('tasks') === null) {
        //Creo un arreglo llamado tasksLocals y lo dejo vacio para empezar a guardar tareas
        let tasksLocals = [];
        // A este arreglo lo vamos llenando de tareas nuevas con el metodo push
        // Las tareas obtenidas son del objeto task
        tasksLocals.push(task);

        // Una vez obtenido este arreglo lo almaceno en el localStorage
        // Lo almaceno en formato string
        localStorage.setItem('tasks', JSON.stringify(tasksLocals));

    } else {
    // Caso contrario si ya existen valores alli vamos a empezar a actualizarlos
    // Obtengo las tareas y las almaceno en una constante convertidas en formato Json.parse
        const newTasks = JSON.parse(localStorage.getItem('tasksLocals'));
        // Ahora empiezo a actualizarlas con el metodo push
        newTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(newTasks));

    }

    e.preventDefault();
}