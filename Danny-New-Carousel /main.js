 $(document).ready(function(){ 

 	$(".our").animate({top: "240px"}, 1000)
 	$(".left-p").animate({bottom: "300px"}, 1000)

 	function animateTextIn() {
 		$(".our").animate({top: "240px"}, 1000)
 		$(".left-p").animate({bottom: "300px"}, 1000)
 	}

 	function animateTextOut() {
 		$(".our").animate({top: "-240px"}, 1000)
 		$(".left-p").animate({bottom: "-300px"}, 1000)
 	}

	$("#slideshow > div:gt(0)").hide(); 


	var intrvl = function() { 
		$('#slideshow > div:first')
		.fadeOut(1000, animateTextOut())
		.next()
		.fadeIn(1000, animateTextIn())
		.end()
		.appendTo('#slideshow');
	}

	var SlideTimer = setInterval(intrvl, 3000);

	$(".arrow-div-2").click(function(){
		clearInterval(SlideTimer);
		$('#slideshow > div:first')
		.fadeOut(1000, animateTextOut())
		.next()
		.fadeIn(1000, animateTextIn())
		.end()
		.appendTo('#slideshow');

		SlideTimer = setInterval(intrvl, 6000)
			
	}) 

	$(".arrow-div-1").click(function(){
		clearInterval(SlideTimer);
		$('#slideshow > div:first')
		.fadeOut(1000, animateTextOut());
		$("#slideshow > div:last")
		.fadeIn(1000, animateTextIn())
		.prependTo('#slideshow');

		SlideTimer = setInterval(intrvl, 6000)
	})



}) 
