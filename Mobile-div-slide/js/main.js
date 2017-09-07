      $(document).ready(function() {

          function moveRight() {

                 $(".round-div").removeClass("round-right-almost round-right-after")

            if ( $("#round1").hasClass("round-active") ){
                 $("#round4").removeClass("round-left-after")
                 $("#round1").removeClass("round-active")
                 $("#round1").addClass("round-left-after")
                 $("#round2").removeClass("round-left-almost")
                 $("#round2").addClass("round-active")
                 $("#round3").addClass("round-left-almost")
                 $("#first-circle").removeClass("circle-active")
                 $("#second-circle").addClass("circle-active")

              }

            else if ( $("#round2").hasClass("round-active") ){
                 $("#round1").removeClass("round-left-after")
                 $("#round2").removeClass("round-active")
                 $("#round2").addClass("round-left-after")
                 $("#round3").removeClass("round-left-almost")
                 $("#round3").addClass("round-active")
                 $("#round4").addClass("round-left-almost")
                 $("#second-circle").removeClass("circle-active")
                 $("#third-circle").addClass("circle-active")

              }

            else if ( $("#round3").hasClass("round-active") ){
                 $("#round2").removeClass("round-left-after")
                 $("#round3").removeClass("round-active")
                 $("#round3").addClass("round-left-after")
                 $("#round4").removeClass("round-left-almost")
                 $("#round4").addClass("round-active")
                 $("#round1").addClass("round-left-almost")
                 $("#third-circle").removeClass("circle-active")
                 $("#fourth-circle").addClass("circle-active")

              }

            else if ( $("#round4").hasClass("round-active") ){
                 $("#round3").removeClass("round-left-after")
                 $("#round4").removeClass("round-active")
                 $("#round4").addClass("round-left-after")
                 $("#round1").removeClass("round-left-almost")
                 $("#round1").addClass("round-active")
                 $("#round2").addClass("round-left-almost")
                 $("#fourth-circle").removeClass("circle-active")
                 $("#first-circle").addClass("circle-active")

              }
          }

          function moveLeft() {

                $(".round-div").removeClass("round-left-almost round-left-after")

              if ( $("#round1").hasClass("round-active") ){
                 $("#round4").removeClass("round-right-after")
                 $("#round2").removeClass("round-right-almost")
                 $("#round1").removeClass("round-active")
                 $("#round1").addClass("round-right-almost")
                 $("#round3").addClass("round-right-after")
                 $("#round4").addClass("round-active")
                 $("#first-circle").removeClass("circle-active")
                 $("#fourth-circle").addClass("circle-active")

              }

            else if ( $("#round2").hasClass("round-active") ){
                 $("#round1").removeClass("round-right-after")
                 $("#round3").removeClass("round-right-almost")
                 $("#round2").removeClass("round-active")
                 $("#round2").addClass("round-right-almost")
                 $("#round4").addClass("round-right-after")
                 $("#round1").addClass("round-active")
                 $("#second-circle").removeClass("circle-active")
                 $("#first-circle").addClass("circle-active")

              }

            else if ( $("#round3").hasClass("round-active") ){
                 $("#round2").removeClass("round-right-after")
                 $("#round4").removeClass("round-right-almost")
                 $("#round3").removeClass("round-active")
                 $("#round3").addClass("round-right-almost")
                 $("#round1").addClass("round-right-after")
                 $("#round2").addClass("round-active")
                 $("#third-circle").removeClass("circle-active")
                 $("#second-circle").addClass("circle-active")

              }

            else if ( $("#round4").hasClass("round-active") ){
                 $("#round3").removeClass("round-right-after")
                 $("#round1").removeClass("round-right-almost")
                 $("#round4").removeClass("round-active")
                 $("#round4").addClass("round-right-almost")
                 $("#round2").addClass("round-right-after")
                 $("#round3").addClass("round-active")
                 $("#fourth-circle").removeClass("circle-active")
                 $("#third-circle").addClass("circle-active")

              }
          }


          $('#arrowLeft').click(function () {
               moveLeft();
          });

          $('#arrowRight').click(function () {
               moveRight();
           });


      });