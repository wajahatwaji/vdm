$(document).ready(function(){

  $('.section3-slider').slick({
    centerMode: true,
    centerPadding: '350px',
    slidesToShow: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });


// POPUP sec js start
// $(".section2-block-outerwrap").click(function(){
//   $(".sec2-popup-outerwrap").css("display" , "block");
// });
// $(".cross-btn").click(function(){
//   $(".sec2-popup-outerwrap").css("display" , "none");
// });
// POPUP sec js end


// Header sec js start
var scroll_pos = 0;
$(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 100) {
        $("header").css('background-color', '#dbdcdd');
    } else {
        $("header").css('background-color', '');
    }
});
// Header sec js end

// MAP sec js start:

$(".btn-innerwrap.blue").click(function(){
  $(".sec5-outerwrap").removeClass('hello2')
  $(".sec5-outerwrap").removeClass('hello3');
  $(".btn-innerwrap.blue").css({"background-image": "linear-gradient(to right, #5ac8fa, #5ac8fa, #5ac8fa, #5ac8fa, #5ac8fa)" , "color": "#fff"});
  $(".btn-innerwrap.red").css({"background-color": "" , "color": ""});
  $(".btn-innerwrap.yellow").css({"background-color": "" , "color": ""});

  // $(".sec5-outerwrap").css("background-image" , "url(../images/Map_1_Desktop.svg)");
});
$(".btn-innerwrap.red").click(function(){
  $(".sec5-outerwrap").addClass('hello2');
  $(".sec5-outerwrap").removeClass('hello3');
  $(".btn-innerwrap.blue").css({"background-image": "" , "color": ""});
  $(".btn-innerwrap.red").css({"background-color": "#FF2C77" , "color": "#fff"});
  $(".btn-innerwrap.yellow").css({"background-color": "" , "color": ""});
  // $(".sec5-outerwrap").css("background-image" , "url(../images/Map_2_Desktop.svg)");
});
$(".btn-innerwrap.yellow").click(function(){
  $(".sec5-outerwrap").removeClass('hello2');
  $(".sec5-outerwrap").addClass('hello3');
  $(".btn-innerwrap.blue").css({"background-image": "" , "color": ""});
  $(".btn-innerwrap.yellow").css({"background-color": "#FFAA00" , "color": "#fff"});
  $(".btn-innerwrap.red").css({"background-color": "" , "color": ""});
  // $(".sec5-outerwrap").css("background-image" , "url(../images/Map_3_Desktop.svg)");
});

// MAP sec js end:

// accordian js start:
$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-heading').removeClass('active');
});
// accordian js end:


});