/* ==========================================================================
   Catalog Scripts
   ========================================================================== */


   //declaring global variables

   var subTotal = 0.00;
   var tax = 1.80;
   var shipping = 7.00;
   var discount = 0.00;
   var total = 0;

   //global quantities
   var backpackQty = 0;
   var waterbottleQty = 0;
   var headphonesQty = 0;
   var laptopQty = 0;
   var tshirtQty = 0;
   var usbQty = 0;

   //global prices
   var backpackPrice = 40.00;
   var waterbottlePrice = 10.00;
   var headphonesPrice = 90.00;
   var laptopPrice = 400.00;
   var tshirtPrice = 13.00;
   var usbPrice = 8.00;

 

   //global functions that will be called in each event

   function computeSubTotal(){

   	//alert(subTotal);

	$("#subTotal").text("$"+subTotal);


   }



   function computeTotal(){

   	total = (((subTotal*tax)+subTotal));

   	//alert(total);

   	$("#total").text("$"+total);

   }




$( document ).ready(function() {
  // Handler for .ready() called.

  $("#addBackpack").click(function(){

  		backpackQty++;

  		$("#backpackQty").text(backpackQty);

  		subTotal+=backpackPrice;

  		computeSubTotal();
  		computeTotal();
	});

   $("#subtractBackpack").click(function(){

   		if(backpackQty>0){
	  		backpackQty--;

	  		$("#backpackQty").text(backpackQty);

	  		subTotal-=backpackPrice;

	  		computeSubTotal();
	  		computeTotal();
  		}
	});

    $("#addWaterbottle").click(function(){

  		waterbottleQty++;

  		$("#waterbottleQty").text(waterbottleQty);

  		subTotal+=waterbottlePrice;

  		computeSubTotal();
  		computeTotal();
	});

	 $("#subtractWaterbottle").click(function(){

	 	if(waterbottleQty>0){
	  		waterbottleQty--;

	  		$("#waterbottleQty").text(waterbottleQty);

	  		subTotal-=waterbottlePrice;

	  		computeSubTotal();
	  		computeTotal();
	  	}
	});
	  $("#addHeadphones").click(function(){

  		headphonesQty++;

  		$("#headphonesQty").text(headphonesQty);

  		subTotal+=headphonesPrice;

  		computeSubTotal();
  		computeTotal();
	});


	  $("#subtractHeadphones").click(function(){

	  	if(headphonesQty>0){
	  		headphonesQty--;

	  		$("#headphonesQty").text(headphonesQty);

	  		subTotal-=headphonesPrice;

	  		computeSubTotal();
	  		computeTotal();
	  	}
	});

	    $("#addLaptop").click(function(){

  		laptopQty++;

  		$("#laptopQty").text(laptopQty);

  		subTotal+=laptopPrice;

  		computeSubTotal();
  		computeTotal();
	});

	    $("#subtractLaptop").click(function(){

	    if(laptopQty>0){
	  		laptopQty--;

	  		$("#laptopQty").text(laptopQty);

	  		subTotal-=laptopPrice;

	  		computeSubTotal();
	  		computeTotal();
	  	}
	});

	    $("#addTshirt").click(function(){

  		tshirtQty++;

  		$("#tshirtQty").text(tshirtQty);

  		subTotal+=tshirtPrice;

  		computeSubTotal();
  		computeTotal();
	});

	    $("#subtractTshirt").click(function(){

	    if(tshirtQty>0){
	  		tshirtQty--;

	  		$("#tshirtQty").text(tshirtQty);

	  		subTotal-=tshirtPrice;

	  		computeSubTotal();
	  		computeTotal();
	  	}
	});

	    $("#addUsb").click(function(){

  		usbQty++;

  		$("#usbQty").text(usbQty);

  		subTotal+=usbPrice;

  		computeSubTotal();
  		computeTotal();
	});

	    $("#subtractUsb").click(function(){

	    if(usbQty>0){
	  		usbQty--;

	  		$("#usbQty").text(usbQty);

	  		subTotal-=usbPrice;

	  		computeSubTotal();
	  		computeTotal();
	  	}
	});

/* attach a submit handler to the form */
    $("#form").submit(function(event) {

      /* stop form from submitting normally */
      event.preventDefault();

      /* get some values from elements on the page: */
        var data = $('#form').serialize();

      //send form input to php script
       $.ajax({type:'GET', url: 'login.php', data:data, success: function(response) {
                
                if(response!="invalid"){

                  alert("You are eligible for a 15% discount!");
                  var discount = 0.15;
                  $("#discount").text("%15");

                }

                else{

                  alert("Please register to receive a discount");
                }
               

              }
      });

    });








});


















