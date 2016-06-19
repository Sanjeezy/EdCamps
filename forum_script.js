
/* ==========================================================================
    Forum Javascript
   ========================================================================== */


$( document ).ready(function() {
  // Handler for .ready() called.



/* attach a submit handler to the form */
    $("#form").submit(function(event) {
      //stop form from submitting normally 
      event.preventDefault();

      /* get some values from elements on the page: */
        var data = $('#form').serialize();

      /*send form input to php script*/
       $.ajax({type:'POST', url:'forum.php', data:data, success: function(response) {
      					alert(response);
    
	

			     }
		    });

    });



    $("#viewPosts").click(function() { //event goes inside function
      //stop form from submitting normally 
      //event.preventDefault();

      /* get some values from elements on the page: */
        //var data = $('#form').serialize();

      /*send form input to php script*/
       $.ajax({type:'GET', url:'getPosts.php', dataType:'html', success: function(response) {
                // alert(response);
                
                $("#responseContainer").html(response);
  

           }
        });

    });


 });   