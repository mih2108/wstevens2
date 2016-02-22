$(document).ready(function () {
    var carousel = $("#owl-main");
  carousel.owlCarousel({
    navigation:true,
    singleItem:true,
    navigationText: [
      "<",
      ">"
      ],
  });

  
});

$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
);	




