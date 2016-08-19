$(document).ready(function(){

    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();
    $(this).append('<div class="status like">Like!</div>');  
      //window.open ("file:///C:/Users/GWC1/Downloads/WEBSITE/owl.html");    
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
       $(this).next().removeClass('rotate-left rotate-right').delay(5000000).fadeIn(400);

       if ($(this).is('#italian')){
           setTimeout(function(){ window.open("cafe.html"); }, 1000);
        }
       if ($(this).is('#american')){
            setTimeout(function(){ window.open("owl.html"); }, 1000);
       }
       if ($(this).is('#french')){
           setTimeout(function(){ window.open("per_se.html"); }, 1000);
       }
       if ($(this).is('#japanese')){
           setTimeout(function(){ window.open("sushi.html"); }, 1000);

       }
       if ($(this).is('#spanish')){
           setTimeout(function(){ window.open("amada.html"); }, 1000);
       }
              
 
    });  

   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('No More Options');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });

});
