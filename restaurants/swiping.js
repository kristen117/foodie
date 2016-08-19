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

$('body').on('click','.option li',function(){
	var i = $(this).parents('.select').attr('id');
	var v = $(this).children().text();
	var o = $(this).attr('id');
	$('#'+i+' .selected').attr('id',o);
	$('#'+i+' .selected').text(v);
  if (v=="New York City"){
  	document.body.style.backgroundImage = "url('http://www.ssn.tv/wp-content/uploads/2014/07/NYC-1.jpg')";
  }
  else if (v=="Houston"){
      document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/d/de/Houston_night.jpg')";
    }
  else if (v=="Los Angeles"){
      document.body.style.backgroundImage = "url('https://cdnx.jetcdn.com/static/images/destinations/los-angeles/bg3.jpg')";
  }
  else if (v=="Boston"){
      document.body.style.backgroundImage = "url('http://cache.boston.com/bonzai-fba/Original_Photo/2006/01/10/1136915281_2365.jpg')";
  else {
      document.body.style.backgroundImage = "url('http://www.visitphilly.com/thumb.php?w=1000&zc=1&src=http://photos.visitphilly.com/2014_CV_LOVE_PanoramaView-1400VP.jpg')";
  }
});
