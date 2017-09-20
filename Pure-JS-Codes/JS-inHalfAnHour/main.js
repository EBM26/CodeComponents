var newItemCounter = 1; // item counter for new list itemes created
var ourList = document.querySelector('#our-list'); // grabbing the ul 
var ourButton = document.querySelector("our-button") // grabbing the button
var ourHeadline = document.querySelector("our-headline"); // grabbing the headline
var listItems = document.querySelectorAll('#our-list li') // grabbing the all list items (was not used)

// event listener that fires the activateItem function every time its clicked
ourList.addEventListener("click", activateItem);

// changes headline to the list name and adds a unique class when clicked 
function activateItem(e) {
	if (e.target.nodeName == "LI") { // checks if the item that was clicked was a list
		ourHeadline.innerHTML = e.target.innerHTML;
		for (i = 0; i < e.target.parentNode.children.length; i++) { // for loop that removes class active for each list 
		e.target.parentNode.children[i].classList.remove("active")
	}
		e.target.classList.add("active")
	}
}

ourButton.addEventListener("click", createNewItem);

// creates new list item when button is clicked
function createNewItem() {
	ourList.innerHTML += "<li>Something new " + newItemCounter + "</li>"
	newItemCounter++;
}