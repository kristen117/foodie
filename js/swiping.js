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

var dietary_restriction;

$(".restrictions-menu li > a").click(function(e){
  $('.restrictions-selection').text(this.innerHTML);
  dietary_restriction = this.innerHTML;  

});

var cuisine_choice;

$(".cuisine-menu li > a").click(function(e){
	$('.cuisine-selection').text(this.innerHTML);
	cuisine_choice = this.innerHTML;
});

var occasion_choice;

$(".occasion-menu li > a").click(function(e){
	$('.occasion-selection').text(this.innerHTML);
	occasion_choice = this.innerHTML;
});

// Closes the sidebar menu
$("#menu-close").click(function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});
// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});
// Scrolls to the selected menu item on the page
$(function() {
	$('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

//$('body').on('click','.option li',function(){
function changeBackground(){	
	var i = $(this).parents('.select').attr('id');
	var v = $(this).children().text();
	var o = $(this).attr('id');
	$('#'+i+' .selected').attr('id',o);
	$('#'+i+' .selected').text(v);
	console.log(v);
  if (v=="New York City"){
  	document.body.style.backgroundImage = "url('http://www.ssn.tv/wp-content/uploads/2014/07/NYC-1.jpg')";
  }
  console.log(v);
}//);