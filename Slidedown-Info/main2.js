$(document).ready(function() {
	
	$(".question-box").click(function(){

		if(!$(this).hasClass("active")) {
			$(".question-box").removeClass("active")
			$(".text-box").slideUp("slow");
			$(".plus-icon").removeClass("transition");
			$(this).addClass("active");
			$(this).find(".text-box").slideDown("slow")
			$(this).find(".plus-icon").addClass("transition");
			}

		    else if($(this).hasClass("active")) {
				$(this).removeClass("active")
				$(".text-box").slideUp("slow");
				$(".plus-icon").removeClass("transition");
			  }

	}) // click function


}) // ready function