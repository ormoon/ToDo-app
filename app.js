var form = document.getElementById('main-form')
var taskToAdd = document.getElementById('taskToAdd');
var tbody = document.querySelector('.task-list');

form.addEventListener('submit', (e) => {
    var data = taskToAdd.value;
    var date = new Date().toLocaleDateString();
    if (data == '') {
        showMsg("Please fill the task field", 'error');
    } else {
        const tr = document.createElement('tr');
        tr.innerHTML += `
                    <td>${data}</td>
                    <td>${date}</td>
                    <td><a onclick="removeTask(this)" class = "btn btn-danger"> X </a></td>
        `
        tbody.appendChild(tr)
        showMsg("Task added Successfully", 'success');
    }
    e.preventDefault()
    taskToAdd.value = ""
});

function removeTask(target) {
    console.log(target.parentElement.parentElement.remove());
    showMsg("Deleted Successfully", 'error');
}

function showMsg(msg, className) {
    const div = document.createElement('div');
    div.className = className;
    div.innerHTML += msg;
    const container = document.querySelector('.container');
    container.insertBefore(div, form);

    setTimeout(() => {
        div.style.display = 'none';
    }, 1000)
}

// var elem = document.querySelector('#some-element');
