			$(document).ready(function() {
	
				$(".info-box").click(function(){

					if(!$(this).hasClass("active")) {
						$(".info-box").removeClass("active")
						$(".info-p").slideUp("slow");
						$(this).addClass("active");
						$(this).find(".info-p").slideDown("slow")
						}

					    else if($(this).hasClass("active")) {
							$(this).removeClass("active")
							$(".info-p").slideUp("slow");
						  }

				}) // click function

				// copyright date function
				var now = new Date
    			var theYear=now.getYear()
    			if (theYear < 1900)
    			theYear=theYear+1900
    			$("#date").html(theYear)


			}) // ready function