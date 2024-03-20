document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('addButton');
    var todoInput = document.getElementById('todoInput');
    var todoList = document.getElementById('todoList');
    var nextItemId = 0;
    var baseUrl = 'http://localhost:8000'

    addButton.addEventListener('click', function() {
        var todoText = todoInput.value.trim();
        if (todoText !== '') {
            var listItem = document.createElement('li');
            listItem.textContent = todoText;
	    listItem.setAttribute('id', `${nextItemId}`);
	    nextItemId += 1;
            todoList.appendChild(listItem);
            todoInput.value = '';

	    var xhr = new XMLHttpRequest();
	    var urlText = encodeURI(todoText);
	    xhr.open('POST', `${baseUrl}/add?item=${urlText}`, false);
	    xhr.send(null);
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');

	    var itemId = event.target.getAttribute('id');
	    var xhr = new XMLHttpRequest();
	    var urlText = encodeURI(itemId);
	    xhr.open('DELETE', `${baseUrl}/delete?item=${urlText}`, false);
	    xhr.send(null);
        }
    });
});
