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


  ///the following controls the navarrow

  $('#navarrow').click(function(){
    $('#navarrow').animate({left: -73}, 250, function(){
     $('#kitchenmenu').animate({left: 0}, 250, function(){
      $('#kitchenmenu .options, #kitchenmenu .palettes').animate({opacity: 0.6}, 250, function(){ 
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
            $('.palettes').show().css({left: 50});
          });
        });
      });    
    });  
  });


  $('.palettes').click(function () {
    $('.palettes').animate({left: 312, opacity: 0}, 250, function () {
      $('.palettes, .options, .empty, #x').hide();

  });
      $('.palettemenu').animate({left: 0}, 250);
      $('#backarrow').fadeIn(200);
    });

  $('#backarrow').click(function(){
    $('#backarrow').hide();
    $('.palettes, .options, .empty, #x').show();
   $('.palettemenu').animate({left: -312}, 500, function (){
   }); 
   $('.palettes').animate({left: 50, opacity: 0.6}, 0);
  });


  //the following controls the costmenu

  $('#costarrow').click(function(){
    // $('#costarrow').fadeOut(100, function(){
      $('#costmenu').animate({bottom: 0}, 250, function(){
      });
    // });
  });

  // approach 1 for .slideDown & .slideUp
  // $('.showimg').click(function () {
  //   $('.newimg').slideDown(500, function () {

  //   });
  // });
  // $('.hideimg').click(function () {
  //   $('.newimg').slideUp();
  // });


  // approach 2 for .slideDown & .slideUp
  // $('.showbutton').click(function () {
  //   $(this).parent('div').animate({height: 100});
  //   $(this).parent('div').addClass('selected');
  // });

    //javascript should go above this line
});

