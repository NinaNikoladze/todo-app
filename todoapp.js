const userForm = document.querySelector("#taskForm");
const userList = document.querySelector("#list");
const userInput = document.querySelector("#userinput");

let userTasks = [];
const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
    userTasks = JSON.parse(savedTasks);
}

function showTasks() {
    userList.innerHTML = '';
    for (let i = 0; i < userTasks.length; i++) {
        const taskText = document.createElement('li');
        taskText.innerText = userTasks[i];

     taskText.addEventListener('dblclick', function (e) {
    this.contentEditable = true;
    this.focus();
});

taskText.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        userTasks[i]= taskText.innerText ;
    }
});
        userList.append(taskText);
    }
}

userForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputText = userInput.value;
    userTasks.push(inputText);
    localStorage.setItem('tasks', JSON.stringify(userTasks));
    userInput.value = '';
    console.log(userTasks);

    showTasks();
});


// userTasks = [];
