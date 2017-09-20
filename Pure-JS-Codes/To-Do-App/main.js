(function () { // self-invoking function in order to keep variables in correct scope
	
	var input = document.getElementById('input');
	var btn = document.getElementById('btn');
	var lists = {
		todo: document.getElementById('todo'),
		done: document.getElementById('done')
	}

	var makeTaskHtml = function(str) { // function that takes the input from users and creates elements to populate the lists
		var el = document.createElement('li');
		var checkbox = document.createElement('input');
		var label = document.createElement('span')

		checkbox.type = 'checkbox';
		checkbox.addEventListener('click', onCheck);
		label.textContent = str;

		el.appendChild(checkbox);
		el.appendChild(label);
		return el;
	}

	var addTask = function(task) { // appends <li> to specific list
		lists.todo.appendChild(task);
	}

	var onCheck = function(event) { // callback function attached to checkbox that moves checked items to proper column 
		var task = event.target.parentElement;
		var list = task.parentElement.id;

		lists[list === 'done' ? 'todo' : 'done'].appendChild(task); // checks if list item is done and removes checkbox in next line
		this.checked = false;
		input.focus();

	};

	var onInput = function() {
		var str = input.value.trim();
		
		if (str.length > 0) {
			addTask(makeTaskHtml(str, onCheck))
			// clear input after making list item
			input.value = '';
			input.focus();
		}
	};

	btn.addEventListener("click", onInput); // event listener that uses onInput function to grab users input
	input.addEventListener("keyup", function(event){ // adds list item by pressing 'enter' and not just the button
		var code = event.keyCode;

		if (code === 13) {
			onInput();
		}
	});
	input.focus(); // creates auto focus when page loads

}());