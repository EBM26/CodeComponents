			$(document).ready(function() {
	
				$(".info-box").click(function(){

					if(!$(this).hasClass("active")) {
						$(".info-box").removeClass("active")
						$(".info-p").slideUp("slow");
						$(".triangle-right").removeClass("transition");
						$(this).addClass("active");
						$(this).find(".info-p").slideDown("slow")
						$(this).find(".triangle-right").addClass("transition");
						}

					    else if($(this).hasClass("active")) {
							$(this).removeClass("active")
							$(".info-p").slideUp("slow");
							$(".triangle-right").removeClass("transition");
						  }

				}) // click function

				// copyright date function
				var now = new Date
    			var theYear=now.getYear()
    			if (theYear < 1900)
    			theYear=theYear+1900
    			$("#date").html(theYear)


			}) // ready function