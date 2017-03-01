$(window).scroll(function(){
  $(".logo").stop().animate({"width": 250 - ($(window).scrollTop())/2 + "px"}, 20 );
  $("#fhome").stop().animate({"width": 300 - ($(window).scrollTop())/2 + "px", "height": 300 - ($(window).scrollTop())/2 + "px", "line-height": 300 - ($(window).scrollTop())/2 + "px", "left": 300 - ($(window).scrollTop()) + "px"}, 20 );

var scroll = $(window).scrollTop();

var height = window.innerHeight -25;

if (scroll > height){
	$("header").addClass("header1");}
else {
	$("header").removeClass("header1");
}

});