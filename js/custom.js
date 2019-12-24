(function($) { "use strict";

	
	//Home text fade on scroll	
	
   $(window).scroll(function () { 
        var $Fade = $('.hero-text');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 400)
        });
    });	
	
	
	//Navigation	

	$('ul.slimmenu').on('click',function(){
			var width = $(window).width(); 
			if ((width <= 1200)){ 
			$(this).slideToggle(); 
		}	
	});				
	$('ul.slimmenu').slimmenu(
			{
			resizeWidth: '1200',
			collapserTitle: '',
			easingEffect:'easeInOutQuint',
			animSpeed:'medium',
			indentChildren: true,
			childrenIndenter: '&raquo;'
	});		

	
	/* Scroll Too */
	
			$(window).load(function(){"use strict";
				
				/* Page Scroll to id fn call */
				$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
					highlightSelector:"ul.slimmenu li a",
					offset: 78,
					scrollSpeed:800,
					scrollEasing: "easeInOutCubic"
				});
				
				/* demo functions */
				$("a[rel='next']").click(function(e){
					e.preventDefault();
					var to=$(this).parent().parent("section").next().attr("id");
					$.mPageScroll2id("scrollTo",to);
				});
				
			});	

	
	$(document).ready(function() {
		
		
	//Scroll back to top
	
		var offset = 450;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});
				
		jQuery('.scroll-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
	 
	 
		/* Separate Carousels */
	 
		$("#owl-sep-1").owlCarousel({
			navigation: true,
			pagination : false,
			transitionStyle : "fade",
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: false
		});
		
		$("#owl-sep-2").owlCarousel({
			navigation: true,
			pagination : false,
			transitionStyle : "fade",
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: false
		});
		
		$("#owl-post").owlCarousel({
			navigation: true,
			pagination : false,
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: false
		});
	 
	 
		/* Logos Carousel */
	 
		$("#owl-logo").owlCarousel({
			navigation: false,
			pagination : false,
			transitionStyle : "fade",
			slideSpeed : 500,
			paginationSpeed : 500,
			items : 6,
			itemsDesktop      : [1199,4],
			itemsDesktopSmall     : [979,3],
			itemsTablet       : [768,2],
			itemsMobile       : [479,2],
			autoPlay: false
		});
	
	
	//Colorbox single project pop-up
	
	$(".group1").colorbox({rel:'group1', maxWidth:'95%', maxHeight:'95%'});
	$(".youtube").colorbox({iframe:true, innerWidth:940, innerHeight:450});
	$(".vimeo").colorbox({iframe:true, innerWidth:940, innerHeight:450});
	
	
	//Parallax
		
	$('.parallax-home').parallax("50%", 0.4);
			
			
	//About Carousel
	 
	  var sync1 = $("#sync1");
	  var sync2 = $("#sync2");
	 
	  sync1.owlCarousel({
		singleItem : true,
		transitionStyle : "fade",
		autoHeight : true,
		slideSpeed : 1500,
		navigation: true,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200
	  });

	  
	  sync2.owlCarousel({
		items : 3,
		itemsDesktop      : [1199,3],
		itemsDesktopSmall     : [979,3],
		itemsTablet       : [768,2],
		itemsMobile       : [479,2],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
	  });
	 
	  function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
		  center(current)
		}
	  }
	 
	  $("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	  });
	 
	  function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
		  if(num === sync2visible[i]){
			var found = true;
		  }
		}
	 
		if(found===false){
		  if(num>sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", num - sync2visible.length+2)
		  }else{
			if(num - 1 === -1){
			  num = 0;
			}
			sync2.trigger("owl.goTo", num);
		  }
		} else if(num === sync2visible[sync2visible.length-1]){
		  sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
		  sync2.trigger("owl.goTo", num-1)
		}
		
	  }
	 
	});	


	//Work Carousel
	
	(function() {
		document.documentElement.className = 'js';
		var slideshow = new CircleSlideshow(document.getElementById('slideshow'));
	})();


	$(".post").fitVids();	
	
	
	$('.vimeo a,.youtube a').click(function (e) {
		e.preventDefault();
		var videoLink = $(this).attr('href');
		var classeV = $(this).parent();
		var PlaceV = $(this).parent();
		if ($(this).parent().hasClass('youtube')) {
			$(this).parent().wrapAll('<div class="video-wrapper">');
			$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
		} else {
			$(this).parent().wrapAll('<div class="video-wrapper">');
			$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=ffffff" width="500" height="281" frameborder="0"></iframe>');
		}
	});
	
	//Facts Counter 
	
	$('.counter-jquery-start').counterUp({
        delay: 100,
        time: 3000
	});




	
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	