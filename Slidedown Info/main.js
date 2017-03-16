     $(document).ready(function(){
  
         $(".question-box").click(function () {

			if(!$(this).hasClass("active")) {
				$(".plus-icon").removeClass("transition");
				$(".text-box").slideUp("slow");
				$(this).find(".text-box").slideDown("slow")
				$(this).find(".plus-icon").addClass("transition");
			  }

			if($(".question-box.box1").hasClass("active")){
				$(this).find(".plus-icon").addClass("transition");
		   		 $(this).find(".text-box").slideDown("slow")
				
		   	}

		   	if($(".question-box.box2").hasClass("active")){
				$(this).find(".plus-icon").addClass("transition");
		   		 $(this).find(".text-box").slideDown("slow")
				
		   	}

		   	if($(".question-box.box3").hasClass("active")){
				$(this).find(".plus-icon").addClass("transition");
		   		 $(this).find(".text-box").slideDown("slow")
				
		   	}


	       }) // click function

       }); // ready function
    