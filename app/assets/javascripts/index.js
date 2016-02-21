$(document).ready(function() {
 
  $("#owl-main").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
       autoplayHoverPause:true,
       navSped: 4000, 
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
})

$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
);	




