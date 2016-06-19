/* ==========================================================================
   Registration page script
   ========================================================================== */

//registering variables

var discount = 1;

// Handler for .ready() called.
$( document ).ready(function() {

  $("#duration1").click(function(){
    
    $("#fee").text("$189");
     
    });

    $("#duration2").click(function(){
    
    $("#fee").text("$378");
     
    });


  $( "#calcDisc" ).click(function() {
    calcDiscount();
});


   
      //form validation on client side
    $('#form').validate({ // initialize the plugin
      errorClass: "my-error-class",
        rules: {
            parentEmail: {
                required: true
            },
            childName: {
                required: true
            },
            dob: {
              required:true
            },
            parentName: {
              required:true
            },
            parentPhone: {
              required:true,
              minlength: 13
            },
            childGrade: {
              required:true
            },
            ccNumber: {
              required:true,
              minlength: 13
            },
            securityCode: {
              required:true,
            },
            expDate: {
              required:true,
            },
            parentPhone: {
              required:true
            }
          
        },
         submitHandler: function(form) {
     /* attach a submit handler to the form */

      /*send form input to php script*/
       $.ajax({type:'POST', url: 'registration.php', data:$('#form').serialize(), success: function(response) {
               alert("You have successfully registered!");
      // similar behavior as clicking on a link
          window.location.href = "http://students.engr.scu.edu/~stamizha/Final_Project/schedule.html";
  

          }
      });
    }


    });

function calcDiscount(){
    var registered = $("#childrenRegistered").val();

    if(registered>1){

      $("#fee").text("$378");

      alert("you are eligible for a discount!")

      $("#fee").text("$340.20");

  $("#duration1").click(function(){
    
    $("#fee").text("$340.20");
     
    });

    $("#duration2").click(function(){
    
    $("#fee").text("$680.40");
     
    });
  }


  else{

    alert("enroll multiple children to receive a discount!")

    $("#duration1").click(function(){
    
    $("#fee").text("$189");
     
    });

    $("#duration2").click(function(){
    
    $("#fee").text("$378");
     
    });
  }
}

    
 
  // submitHandler: function(form) {
  //    /* attach a submit handler to the form */

      
  //     //stop form from submitting normally 

  //     /* get some values from elements on the page: */
  //       var data = $('#form').serialize();

  //     /*send form input to php script*/
  //      $.ajax({type:'POST', url: 'registration.php', data:data, success: function(response) {
  //              alert(response);
  //     // similar behavior as clicking on a link
  //     window.location.href = "http://students.engr.scu.edu/~stamizha/Final_Project/schedule.html";
  

  //         }
  //     });
  //   }


    
 



// /* attach a submit handler to the form */
//     $("#form").submit(function(event) {
      //stop form from submitting normally 
      //event.preventDefault();

  //     /* get some values from elements on the page: */
  //       var data = $('#form').serialize();

  //     /*send form input to php script*/
  //      $.ajax({type:'POST', url: 'registration.php', data:data, success: function(response) {
  //     					alert(response);
  //     // similar behavior as clicking on a link
  //     window.location.href = "http://students.engr.scu.edu/~stamizha/Final_Project/schedule.html";
	

		// 	}
		// });	

  });
  		

