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

    // Si desde localStorage ya existe una clave llamada 'tasksLocals' y es igual a nulo, vamos a empezar a crear tareas
    if (localStorage.getItem('tasksLocals') === null) {
        //Creo un arreglo llamado tasksLocals y lo dejo vacio para empezar a guardar tareas
        let tasksLocals = [];
        // A este arreglo lo vamos llenando de tareas nuevas con el metodo push
        // Las tareas obtenidas son del objeto task
        tasksLocals.push(task);

        // Una vez obtenido este arreglo lo almaceno en el localStorage
        // Lo almaceno en formato string
        localStorage.setItem('tasksLocals', JSON.stringify(tasksLocals));

    } else {
    // Caso contrario si ya existen valores alli vamos a empezar a actualizarlos
    // Obtengo las tareas y las almaceno en una variable, antes la convierto en formato Json.parse para poder almacenar valores en el objeto task
        let newTasks = JSON.parse(localStorage.getItem('tasksLocals'));
        // Ahora empiezo a actualizarlas con el metodo push
        newTasks.push(task);
        // Una vez actualizadas las vuelvo a almacenar
        localStorage.setItem('tasksLocals', JSON.stringify(newTasks));

    }

    e.preventDefault();
}

// Esta funcion va hacer una consulta a localStorage y una vez obtenga los datos lo vamos a mostrar en la interfaz
function getTask() {
    let tasksUI = JSON.parse(localStorage.getItem('tasksLocals'));
    let tasksView = document.getElementById('tasks');

    // En el elemento que creamos en nuestro html vamos a empezar a insertar los datos del localStorage
    // Este espacio empieza en blanco
    tasksView.innerHTML = '';

    // Luego vamos a empezar a recorrer los datos 'tasksLocals' el cual se encontraban en un array
    // Es decir cuando se ejecute este evento, voy a tratar de obtener las tareas almacenadas, si me devuelve algo entonces van a ser tareas que voy a empezar a recorrer

    // 
    for(let i = 0; i < tasksUI.length; i++) {
    // Entonces vamos a empezar a recorrer el arreglo y vamos a obtener uno a uno los datos
        console.log(tasksUI[i]);

    }
}

getTask();