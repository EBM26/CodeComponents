$(document).ready(function() {


	// copyright date function
	var now = new Date
    var theYear=now.getYear()
    if (theYear < 1900)
    theYear=theYear+1900
    $("#date").html(theYear)


}) // ready function