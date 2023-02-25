(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();
	$('.navbar-toggler').on('click', function() {
		// Si el elemento "#mainNav" no tiene la clase "navbar-reduce"
		if (!$("#mainNav").hasClass("navbar-reduce")) {
			$("#mainNav").addClass("navbar-reduce");
		}
	});
	
	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});
	
	// Botón de "Volver arriba"
	$(window).scroll(function() {
		// Si el scroll está a más de 100 píxeles
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
		return false;
	});
	
	/*--/ ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	
	/*--/ Contador /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});
	
	/*--/ Scroll suave /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		// Comprueba si la ruta coincide y que el host también coincida
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	
	// Cierra el menú responsivo cuando se hace clic en un enlace de desplazamiento
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});
	
	// Activa el scrollspy para agregar la clase activa a los elementos de la barra de navegación al desplazarse
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	
	/*--/ Reducción del menú de navegación /--*/
	function reduceNavMenu() {
		var pixels = 50; 
		var top = 1200;
		// Si el scroll está a más de 50 píxeles
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		// Si el scroll está a más de 1200 píxeles
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else
		$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
	}
	
	$(document).ready(function() {
		// Llamamos a la función reduceNavMenu() al cargar la página
		reduceNavMenu();
		// Llamamos a la función reduceNavMenu() al hacer scroll en la página
		$(window).scroll(reduceNavMenu);
		// Inicializamos el desplazamiento suave del botón "Volver arriba"
		$('.back-to-top').on("click", function () {
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});


		
		// Testimonios //
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}

	});
	/*--/ Star Typed /--*/
	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
			var typed = new Typed('.text-slider', {
				strings: typed_strings.split(','),
				typeSpeed: 80,
				loop: true,
				backDelay: 1100,
				backSpeed: 30
			});
		}
	});
}(jQuery));	
	