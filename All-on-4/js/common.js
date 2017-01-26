$(document).ready(function() {

	jQuery(document).ready(function($) {
		function animateElements() {
			$('.pr-chart-ctrl').each(function() {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.pr-chart').easyPieChart({
						size: 200,
						barColor: '#fff',
						trackColor: false,
						scaleColor: false,
						lineWidth: 15,
						lineCap: 'butt',
						animate: 1500,
						onStep: function(from, to, percent) {
							$(this.el).find('i').text(Math.round(percent) + '%');
						}
					}).stop();
				}
			});
		}
		animateElements();
		$(window).scroll(animateElements);
	});

	$(".tugl_menu").click(function(){
		$(".wrappe_menu").addClass("menu_open");
	});
	$(".closed_menu").click(function(){
		$(".wrappe_menu").removeClass("menu_open");
	});

	$(".item_img").magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		}
	});

	(function($){
		$(window).on("load",function(){
			$("#sidebar-wrapper").mCustomScrollbar();
		});
	})(jQuery);

	$(window).load(function() {
		$('.after_and_before').twentytwenty();
	});

	$('.slider_opaciti').slick({
		swipe: false
	});

	$('.slider-smi').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-nav-smi'
	});
	$('.slider-nav-smi').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-smi',
		arrows: false,
		dots: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 3
			}
		}
		]
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 10,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: false,
		dots: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1201,
			settings: {
				slidesToShow: 8
			}
		},
		{
			breakpoint: 981,
			settings: {
				slidesToShow: 6
			}
		},
		{
			breakpoint: 481,
			settings: {
				slidesToShow: 4
			}
		}
		]
	});

});