(function ($) {
  "use strict";


  
	//////////////////////////////////////////////////////////
	
	// ANIMATION JS

	//////////////////////////////////////////////////////////

  if(document.querySelector('.spectrum-animation')){	
    let specaObjectsChains = document.querySelectorAll('.speca-objects__chain');
    let specaObjectsClient = document.querySelector('.speca-objects__client');
    let specaRoadsChainPlaces = document.querySelectorAll('.speca-roads__chain-place');
    let specaRoadsChainDots = document.querySelectorAll('.speca-roads__chain-dot');
    let bgObjectsCard = document.querySelector('.bg-objects__card');
    let bgObjectsCartWrapper = document.querySelector('.bg-objects__cart-wrapper');
    let bgObjectsCalculator = document.querySelector('.bg-objects__calculator');
    let specaBrowser = document.querySelector('.speca-browser');

    function animate(item){
      item.classList.add('animated');
    }
    
    function unanimate(item){
      item.classList.remove('animated');
      }
      
      
    function animationIteration(){
          setTimeout(() => {
              animate(specaObjectsChains[4]);
          }, 29500);
          setTimeout(() => {
              unanimate(specaObjectsChains[4]);
          }, 500);
          setTimeout(() => {
              animate(specaObjectsChains[2]);
          }, 4500);
          setTimeout(() => {
              unanimate(specaObjectsChains[2]);
          }, 5500);
          setTimeout(() => {
              animate(specaObjectsChains[5]);
          }, 9500);
          setTimeout(() => {
              unanimate(specaObjectsChains[5]);
          }, 10500);
          setTimeout(() => {
              animate(specaObjectsChains[0]);
          }, 14500);
          setTimeout(() => {
              unanimate(specaObjectsChains[0]);
          }, 15500);
          setTimeout(() => {
              animate(specaObjectsChains[3]);
          }, 19500);
          setTimeout(() => {
              unanimate(specaObjectsChains[3]);
          }, 20500);
          setTimeout(() => {
              animate(specaObjectsChains[1]);
          }, 24500);
          setTimeout(() => {
              unanimate(specaObjectsChains[1]);
          }, 25500);
          animate(specaRoadsChainPlaces[4]);
          setTimeout(() => {
              unanimate(specaRoadsChainPlaces[4]);
          }, 1000);
          setTimeout(() => {
              animate(specaRoadsChainPlaces[2]);
          }, 5000);
          setTimeout(() => {
              unanimate(specaRoadsChainPlaces[2]);
          }, 6000);
          setTimeout(() => {
              animate(specaRoadsChainPlaces[5]);
          }, 10000);
          setTimeout(() => {
              unanimate(specaRoadsChainPlaces[5]);
          }, 1100);
          setTimeout(() => {
              animate(specaRoadsChainPlaces[0]);
          }, 15000);
          setTimeout(() => {
              unanimate(specaRoadsChainPlaces[0]);
          }, 1600);
          setTimeout(() => {
              animate(specaRoadsChainPlaces[3]);
          }, 20000);
          setTimeout(() => {
              unanimate(specaRoadsChainPlaces[3]);
          }, 2100);
          setTimeout(() => {
              animate(specaRoadsChainPlaces[1]);
          }, 25000);
          setTimeout(() => {
              unanimate(specaRoadsChainPlaces[1]);
          }, 26000);
          animate(specaRoadsChainDots[4]);
          setTimeout(() => {
              unanimate(specaRoadsChainDots[4]);
          }, 5000);
          setTimeout(() => {
              animate(specaRoadsChainDots[2]);
          }, 5000);
          setTimeout(() => {
              unanimate(specaRoadsChainDots[2]);
          }, 10000);
          setTimeout(() => {
              animate(specaRoadsChainDots[5]);
          }, 10000);
          setTimeout(() => {
              unanimate(specaRoadsChainDots[5]);
          }, 15000);
          setTimeout(() => {
              animate(specaRoadsChainDots[0]);
          }, 15000);
          setTimeout(() => {
              unanimate(specaRoadsChainDots[0]);
          }, 20000);
          setTimeout(() => {
              animate(specaRoadsChainDots[3]);
          }, 20000);
          setTimeout(() => {
              unanimate(specaRoadsChainDots[3]);
          }, 25000);
          setTimeout(() => {
              animate(specaRoadsChainDots[1]);
          }, 25000);
          setTimeout(() => {
              unanimate(specaRoadsChainDots[1]);
          }, 30000);
          setInterval(() => {
              animate(bgObjectsCard);
              setTimeout(() => {
                  unanimate(bgObjectsCard);
              }, 2000);
          }, 3000);
          setTimeout(() => {
              setInterval(() => {
                  animate(bgObjectsCartWrapper);
                  setTimeout(() => {
                      unanimate(bgObjectsCartWrapper);
                  }, 2000);
              }, 3000);
          }, 1000);
          setTimeout(() => {
              setInterval(() => {
                  animate(specaBrowser);
                  setTimeout(() => {
                      unanimate(specaBrowser);
                  }, 5000);
              }, 6000);
          }, 2000);
          setTimeout(() => {
              setInterval(() => {
                  animate(bgObjectsCalculator);
                  setTimeout(() => {
                      unanimate(bgObjectsCalculator);
                  }, 6000);
              }, 10000);
          }, 2000);
      }

    function animationCycleStart() {
          animate(specaObjectsClient);
          animationIteration();
          setInterval(() => {
              animationIteration();
          }, 30000);
    }

    animate(specaObjectsChains[4]);
    setTimeout(animationCycleStart, 500);
  }
	

	
	
	



	//////////////////////////////////////////////////////////
	
	// ANIMATION JS END

  //////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	
	// CODEMIRROR JS

  //////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////
	
	// CODEMIRROR JS END

  //////////////////////////////////////////////////////////













  var review = $('.player_info_item');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        '<img src="img/icon/left.svg" alt="">',
        '<img src="img/icon/right.svg" alt="">'

      ],
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });



  var review = $('.textimonial_iner');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }
  $(document).ready(function() {
    $('select').niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

//   $(document).ready(function(){

//     var owl_1 = $('#owl-1');
//     var owl_2 = $('#owl-2');

//     owl_1.owlCarousel({
//       loop:true,
//       margin:10,
//       nav:false,
//       items: 1,
//       dots: false,
//       navText: false,
//       autoplay: true,
      
//     });
//  owl_2.find(".item").click(function(){
//     var slide_index = owl_2.find(".item").index(this);
//     owl_1.trigger('to.owl.carousel',[slide_index,300]);
//   });

//     owl_2.owlCarousel({
//       margin:50,
//       nav: true,
//       items: 3,
//       dots: false,
//       center: true,
//       loop:true,
//       navText: false,
//       autoplay: true,
//       center: true
//     });
    
//   });
 

$('.counter').counterUp({
  time: 2000
});

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay:true,
    pauseOnFocus: true,
    dots: true,
  });
 
  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        }
      }
    ]
  });
 
  //remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 
  //set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
 
  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });
 
 //UPDATED 
   
 $('.slider').on('afterChange', function(event, slick, currentSlide){   
   $('.content').hide();
   $('.content[data-id=' + (currentSlide + 1) + ']').show();
 }); 

 $('.gallery_img').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});




}(jQuery));