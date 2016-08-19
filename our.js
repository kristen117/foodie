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
