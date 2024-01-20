const newTaskInput = document.getElementById('newTask');
const addTaskButton = document.getElementById('add-task-button');
const tasksContainer = document.getElementById('tasks-container');
const emptyListLi = document.getElementById('empty-list-li');

addTaskButton.addEventListener('click', () => {
    if (newTaskInput.value) {

        emptyListLi.remove();

        let taskName = newTaskInput.value;
        let pTask = document.createElement('p');
        pTask.textContent = taskName;

        let iCheck = document.createElement('i');
        iCheck.classList.add('fa-solid', 'fa-check');
        iCheck.addEventListener('click', () => {
            liTask.classList.toggle('completed-task');
        })

        let iTrash = document.createElement('i');
        iTrash.classList.add('fa-solid', 'fa-trash-can');
        iTrash.addEventListener('click', () => {
            liTask.remove();
        })

        let div = document.createElement('div');
        div.classList.add('icons-container');
        div.appendChild(iCheck);
        div.appendChild(iTrash);

        let liTask = document.createElement('li');
        liTask.appendChild(pTask);
        liTask.appendChild(div);
        liTask.classList.add('task');
        tasksContainer.appendChild(liTask);

    } else {
        alert('Debes poner el nombre de la tarea');
    }
})