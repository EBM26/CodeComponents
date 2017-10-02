
// adding submit event to form
document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
	// grabbing values from form inputs
	var issueDesc = document.getElementById('issueDescInput').value;
	var issueSeverity = document.getElementById('issueSeverityInput').value;
	var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
	var issueId = chance.guid(); // using the chance.js to get the global id for values
	var issueStatus = 'Open';


var issue = { // initializing issue object
	id: issueId,
	description: issueDesc,
	severity: issueSeverity,
	assignedTo: issueAssignedTo,
	status: issueStatus
}

if (localStorage.getItem('issues') == null) { // pushing user created issues to localStorage if it is empty
	var issues = []; // creating empty issues array
	issues.push(issue); // pushing issues into array
	localStorage.setItem('issues', JSON.stringify(issues)); // converting issues array to JSON then sending it to localStorage
}

else { // pushing user created issues to localStorage if it is NOT empty
	var issues = JSON.parse(localStorage.getItem('issues'));
	issues.push(issue);
	localStorage.setItem('issues', JSON.stringify(issues))
}

document.getElementById('issueInputForm').reset(); // reseting input elements to be empty

fetchIssues(); // calling function again for newly created list

e.preventDefault(); // preventing the form from submiting

} // end of saveIssue function

function setStatusClosed(id) { // creating close issue function
	var issues = JSON.parse(localStorage.getItem('issues'));
	for (var i = 0; i < issues.length; i++) {
		if (issues[i].id == id) {
			issues[i].status = 'Closed';
		}
	}
	localStorage.setItem('issues', JSON.stringify(issues));
	fetchIssues();
}


function deleteIssue(id) {
	var issues = JSON.parse(localStorage.getItem('issues'));
	for (var i = 0; i < issues.length; i++) {
		if (issues[i].id == id) {
			issues.splice(i, 1);
		}
	}
	localStorage.setItem('issues', JSON.stringify(issues));
	fetchIssues();
}

function fetchIssues() {
	var issues = JSON.parse(localStorage.getItem('issues')); // variable that stores issues created in local storage JSON
	var issuesList = document.getElementById('issuesList');

	issuesList.innerHTML = ''; // shows list of issues

	for (var i = 0; i < issues.length; i++) { // loops through issues details created by users and updates issue list
		var id = issues[i].id;
		var desc = issues[i].description;
		var severity = issues[i].severity;
		var assignedTo = issues[i].assignedTo;
		var status = issues[i].status
		}

	issuesList.innerHTML += '<div class="well">' +
							'<h6> ID: ' + id + '</h6>' +
							'<p><span class="label label-info">' + status + '</span></p>' +
							'<h3>' + desc + '</h3>' +
							'<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>' +
							'<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>' +
							'<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' +
							' <a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>' +
							'</div>'
}