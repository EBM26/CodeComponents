     $(document).ready(function(){

      $(".tab").click(function () {

        if(!$(this).hasClass("active")) {
          $(".tab").removeClass("active")
          $(".content").slideUp();
          $(this).addClass("active");
          var content_show = $(this).attr("title");
          $("#"+content_show).slideDown();

        }
        
      });
    });


