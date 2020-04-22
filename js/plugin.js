/*========== SERVICES CAROUSEL ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
  $('#treatments-carousel').owlCarousel({  //owlCarousel settings
    loop:true,
    margin:10,
    dots: false,
    nav: true,
    navText: ['<div class="arrows"><i class="fa fa-angle-left"></i></div>', '<div class="arrows"><i class="fa fa-angle-right"></i></div>'],
      responsive : { //set number of items shown per screen width
          0 : {
              items: 1, //0px width and up display 1 item
              dots: true
          },
          768 : {
              items: 2, //768px width and up display 2 items
              dots: true
          },
          992 : {
               items: 3,
               dots: true
          },
          1200: {
            items: 3
          }
      }
  });
});

/*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          $('.top-scroll').fadeIn();
      } else {
          $('.top-scroll').fadeOut();
      }
  });
});
