document.addEventListener('DOMContentLoaded', function() {
    load_list();
});

var button = document.getElementById('new');

button.addEventListener('click', function() {
    var new_task = prompt('Please enter your task:');

    if (new_task !== null && new_task.trim() !== '') {
        var list = document.getElementById('list');
        var li = document.createElement('li');
        li.innerHTML = new_task + ' <button onclick="remove_list(this)">X</button>';
        var top_list = list.firstChild;
        list.insertBefore(li, top_list);
        save_list();
    }
});

function remove_list(button) {
    var li = button.parentNode;
    var list = document.getElementById('list');
    list.removeChild(li);
    save_list();
}

function save_list() {
    var list = document.getElementById('list').innerHTML;
    localStorage.setItem('list', list);
}

function load_list() {
    var saved_list = localStorage.getItem('list');
    if (saved_list) {
        document.getElementById('list').innerHTML = saved_list;
        var buttons = document.querySelectorAll('li button');
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                remove_list(button);
            });
        });
    }
}