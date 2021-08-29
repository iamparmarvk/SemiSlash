$(document).ready(function(){
	
	/*Code For Loading Event*/
	jQuery('.loading').fadeOut(1000);	
	
	/*Code For Menu close button*/
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
	});
	
	/*Back to top scroll code*/
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
	// When the user scrolls the page, execute myFunction
	window.onscroll = function() {myFunction()};
	
	function myFunction() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("myBar").style.width = scrolled + "%";
	}
	
});