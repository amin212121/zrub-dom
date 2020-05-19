$(document).ready( function() {
let position = $( document ).scrollTop();

if ( position >1) {
	
$('.navbar').removeClass('bg-light');
$('#navbar-brand').removeClass('navbar-brand');
$('#nav-icon').removeClass('nav-icon');

$('.navbar').addClass('navbarScroll');
$('#nav-icon').addClass('nav-iconScroll');
$('#navbar-brand').addClass('navbar-brandScroll');
$('.navbar-light .navbar-nav .nav-link').css('color', '#000000');	
}

}
);


$('#navbar').mouseenter( function() {

$('.navbar').removeClass('bg-light');
$('#navbar-brand').removeClass('navbar-brand');
$('#nav-icon').removeClass('nav-icon');

$('#navbar-brand').addClass('navbar-brandScroll');
$('#nav-icon').addClass('nav-iconScroll');
$('.navbar').addClass('navbarScroll');
$('.navbar-light .navbar-nav .nav-link').css('color', '#000000');	
} );

$('#navbar').mouseleave( function() {
let position = $( document ).scrollTop();
	if ( position <1) {
$('.navbar').removeClass('navbarScroll');
	$('#navbar-brand').removeClass('navbar-brandScroll');
	$('#nav-icon').removeClass('nav-iconScroll');
	$('#nav-icon').addClass('nav-icon');
	$('#navbar-brand').addClass('navbar-brand');
	
	$('.navbar').addClass('bg-light' );

$('.navbar-light .navbar-nav .nav-link').css('color', '#ffffff');
}}

 );

$(document).scroll( function() {
let position = $( document ).scrollTop();

if ( position >1) {
	
$('.navbar').removeClass('bg-light');
$('#navbar-brand').removeClass('navbar-brand');
$('#nav-icon').removeClass('nav-icon');

$('#navbar-brand').addClass('navbar-brandScroll');
$('#nav-icon').addClass('nav-iconScroll');
$('.navbar').addClass('navbarScroll');
$('.navbar-light .navbar-nav .nav-link').css('color', '#000000');	
}

else {
	$('.navbar').removeClass('navbarScroll');
	$('#navbar-brand').removeClass('navbar-brandScroll');
	$('#nav-icon').removeClass('nav-iconScroll');
	$('#nav-icon').addClass('nav-icon');
	$('#navbar-brand').addClass('navbar-brand');
	
	$('.navbar').addClass('bg-light' );

$('.navbar-light .navbar-nav .nav-link').css('color', '#ffffff');
}
}
);






$(document).ready( function() {
let position = $( document ).scrollTop();
if ( position >400) {
	$('.scroll-top').css('display', 'block');
}

	
});

$(document).scroll( function() {
let position = $( document ).scrollTop();
if ( position >400) {
	$('.scroll-top').css('display', 'block');
}
else {
	$('.scroll-top').css('display', 'none');
}
	
});





var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}




