			$(document).ready(function() {
					$(".checkbox").click(function() {
						if ( $("#question1").hasClass("active") ) {
							 $("#question1").removeClass("active")
							 $("#question2").addClass("active")
							 $(".inside-progress").css("width", "32%")
						}

						else if ( $("#question2").hasClass("active") ) {
							 $("#question2").removeClass("active")
							 $("#question3").addClass("active")
							 $(".inside-progress").css("width", "48%")
						}

						else if ( $("#question3").hasClass("active") ) {
							 $("#question3").removeClass("active")
							 $("#question4").addClass("active")
							 $(".inside-progress").css("width", "54%")
						}

						else if ( $("#question4").hasClass("active") ) {
							 $("#question4").removeClass("active")
							 $("#question5").addClass("active")
							 $(".inside-progress").css("width", "70%")
						}

						else if ( $("#question5").hasClass("active") ) {
							 $("#question5").removeClass("active")
							 $("#question6").addClass("active")
							 $(".inside-progress").css("width", "86%")
						}

						else if ($("#question6").hasClass("active")) {
							$(".orange-check").hide()
							$(this).find(".orange-check").show()
						}
					})

					// changing to random links on submit button click

					$(".CTA").click(function() {
						var links = ["results1.php", "results2.php", "results3.php"]
						var random = Math.floor(Math.random() * links.length);
						var sendCust = links[random]
						window.location = sendCust;
					})	

					function imageMove(width, percent) {
						var ww = $( window ).width();
						var imageLeft = $("#face");

						if (ww < 1720) {
							imageLeft.css('left', '-20%');
						}
					}

					$(window).on("resize", imageMove);
			})