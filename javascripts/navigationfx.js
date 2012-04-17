$(document).ready(function() {
	var nav = $('header#header li a');
	var donde = $('#donde');

	$(window).scroll(function() {
		if ($(window).scrollTop() <= donde.offset().top - 200) {
			nav.removeClass('current');
		}
		else if ($(window).scrollTop() <= donde.offset().top * 2)  {
	  		nav.eq(0).addClass('current');
			nav.eq(1).removeClass('current');
			nav.eq(2).removeClass('current');
			nav.eq(3).removeClass('current');
		}
		else if ($(window).scrollTop() <= donde.offset().top * 3) {
			nav.eq(0).removeClass('current');
			nav.eq(1).addClass('current');
			nav.eq(2).removeClass('current');
			nav.eq(3).removeClass('current');
		}
		else if ($(window).scrollTop() <= donde.offset().top * 4) {
			nav.eq(0).removeClass('current');
			nav.eq(1).removeClass('current');
			nav.eq(2).addClass('current');
			nav.eq(3).removeClass('current');
		}
	 	else  {
			nav.eq(0).removeClass('current');
			nav.eq(1).removeClass('current');
			nav.eq(2).removeClass('current');
	  		nav.eq(3).addClass('current');
	  	}
	});
});