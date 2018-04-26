/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function() {


    var input = document.querySelector("#taskInput");
    var addTask = document.querySelector("#addTaskButton");
    var removeTasks = document.querySelector("#removeFinishedTasksButton");
    var taskList = document.querySelector("#taskList");
    var counter = 0;



    addTask.addEventListener("click", function (event) {

        if (input.value.length <= 5 || input.value.length > 100) {
            removeEventListener();
        }

        var newTask = document.createElement('li');
        var taskName = document.createElement('h1');
        var btnDelete = document.createElement('button');
        var btnComplete = document.createElement('button');



        newTask.appendChild(taskName);
        newTask.appendChild(btnDelete);
        newTask.appendChild(btnComplete);
        taskList.appendChild(newTask);
        taskName.innerText = input.value;
        btnDelete.innerText = 'Delete';
        btnComplete.innerText = 'Complete';
        input.value = "";
        counter++;

        btnComplete.addEventListener('click', function (event) {
            newTask.classList.toggle('complete');
        });

        btnDelete.addEventListener('click', function (event) {
            newTask.parentElement.removeChild(newTask);
            counter--;
        });

        var tasksLeft = document.querySelector("#counter");
        tasksLeft.innerText = counter;

    });

    removeTasks.addEventListener('click', function (event) {
        var completed = document.querySelectorAll('.complete');
        for (var i = 0; i < completed.length; i++) {
            completed[i].parentElement.removeChild(completed[i]);
            counter--;
        }
    });



});











