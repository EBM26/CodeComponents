     $(document).ready(function(){
  
         $("a.tab").click(function () {

           $(".active").removeClass("active");
            
           $(this).addClass("active");
            
           $(".content").slideUp("fast");
            
           var content_show = $(this).attr("title");
           $("#"+content_show).slideDown("fast");
          
       });
    
     });