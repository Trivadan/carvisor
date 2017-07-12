$(function(){ 
  createSticky($(".navheader"));
});
function createSticky(sticky) {  
  if (typeof sticky !== "undefined") {
    var pos = sticky.offset().top,
        win = $(window);      
    win.on("scroll", function() {
        win.scrollTop() >= pos ? sticky.addClass("fixedtop-nav") : sticky.removeClass("fixedtop-nav");      
    });     
  }
}

$(document).ready(function(){
$('#mainslide').bxSlider({
  mode: 'fade',
  speed: 2500,
  controls: false,
  pager: false,
  auto: true
});
});

$('.slicky-ricky').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  fade: true,
  pauseOnHover:false,
  draggable: false,
  autoplaySpeed: 2500,
  infinite: false,
  speed:1000,
  slidesToShow: 1,
  slidesToScroll: 1
});