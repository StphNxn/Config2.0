// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//=
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$( document ).ready(function() {
    console.log( "ready!" );
   $('[data-image]').click(function() {
   		console.log($(this).data('image'));
   		$('#main').css('background-image','url('+$(this).data('image')+')');
   }); 

   $('.showsidebar').click(function(){
   	$('#navbar').hide();
   	$('#sidebar').animate({left: 0}, 500);
   });

    $('.hidesidebar').click(function(){
    $('#navbar').fadeIn(900);	
   	$('#sidebar').animate({left: -200}, 500);
   });

	
	$('[data-show]').click(function(){
	  $($(this).data('show')).toggle();
	});

	$('[data-hide]').click(function(){
	  $($(this).data('hide')).toggle();
	});

  ///the following controls the navarrow

  $('#navarrow').click(function(){
    $('#navarrow').animate({left: -73}, 250, function(){
     $('#kitchenmenu').animate({left: 0}, 250, function(){
        $('#kitchenmenu .options').animate({opacity: 0.6}, 250, function(){ 
          $('#x').fadeIn(200, function(){ 
          });
        });
     }); 
    });
  });

  $('#x').click(function(){
    $('#x').fadeOut(100, function(){
      $('#kitchenmenu').animate({left: -312}, 250, function(){
        $('#kitchenmenu .options').animate({opacity: 0}, 250, function(){
          $('#navarrow').animate({left: 0}, 250, function(){
          });
        });
      });    
    });  
  });

  //the following controls the costmenu

  $('#costarrow').click(function(){
    // $('#costarrow').fadeOut(100, function(){
      $('#costmenu').animate({bottom: 500}, 500, function(){
      });
    // });
  });




    //javascript should go above this line
});

