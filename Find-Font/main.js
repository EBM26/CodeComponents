$(document).ready(function() {

	 $(".code-div:contains('var')").each(function(){
     $(this).html($(this).html()
     		.replace("var", "<span class='red'>var</span>")
     		.replace("function", "<span class='green'>function</span>"));
 });


});

