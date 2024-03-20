document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('addButton');
    var todoInput = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');

    addButton.addEventListener('click', function() {
        var todoText = todoInput.value.trim();
        if (todoText !== '') {
            var listItem = document.createElement('li');
            listItem.textContent = todoText;
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });
});
