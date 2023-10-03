$(document).ready(function() {
    //Menu Js
    $('.menu_toggle_btn').click(function() {
        $('.in_header_wrapper').toggleClass('open_menu');
        $('html').toggleClass('cm-overflow');
    });

    //Sticky Header JS
    // $(window).scroll(function(){
    // var sticky = $('.sticky'),
    //     scroll = $(window).scrollTop();
    // if (scroll >= 100) sticky.addClass('fixed');
    // else sticky.removeClass('fixed');
    // });

    

    // Active change
    // $(".navbar_nav a").click(function (){
    //     $(".navbar_nav li a").removeClass("active");
    //     $(this).addClass("active");
    // });
});


// On scroll active
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('a.scroll_trigger[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar_nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar_nav li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

// Index Hero Slider 
$('.owl_hero_slider').owlCarousel({
    loop:true,
    margin: 0,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
/*--------- rewards slider Js ----------*/



// Mega Menu Js
$(function() {
    // (Optional) Active an item if it has the class "is-active"	
    $(".navbar_nav > .nav-btn > a.is-active").children(".mega_menu").slideDown();
    
    $(".navbar_nav > .nav-btn > a").click(function() {
        // Cancel the siblings
        $(this).siblings(".nav-btn > a").removeClass("is-active").siblings(".mega_menu").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").siblings(".mega_menu").slideToggle("ease-out");
        
    });
});


$(function() {
    // (Optional) Active an item if it has the class "is-active"	
    $(".mega_menu_item.is-active").children(".sub_mega_menu").slideDown();
    
    $(".mega_menu_item").click(function() {
        // Cancel the siblings
        $(this).siblings(".mega_menu_item").removeClass("is-active").children(".sub_mega_menu").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").children(".sub_mega_menu").slideToggle("ease-out");
    });

    // $(".mega_menu_item.is-active > .sub_mega_menu").click(function() {
    //     $(this).find(".sub_mega_menu").slideUp();
    //     $(".sub_mega_menu").css("display","block");
    // });
});

// //Sub Mega Menu Js
// $(function() {
//     // (Optional) Active an item if it has the class "is-active"	
//     $(".mega_menu_item > .mega_menu_item_link.is-active").children(".sub_mega_menu").slideDown();
    
//     $(".navbar_nav > .mega_menu_item_link").click(function() {
//         // Cancel the siblings
//         $(this).siblings(".mega_menu_item_link").removeClass("is-active").children(".sub_mega_menu").slideUp();
//         // Toggle the item
//         $(this).toggleClass("is-active").children(".sub_mega_menu").slideToggle("ease-out");
//     });
// });


$(function() {
	// (Optional) Active an item if it has the class "is-active"	
	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
	
	$(".accordion > .accordion-item").click(function() {
		// Cancel the siblings
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		// Toggle the item
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});
});



// $(document).ready(function(){
//     //var data = $(".accordion-item.is-active .present")[0].outerHTML;
//     var data = $(".accordion-item.is-active .present").text();
//      console.log(data);
//      $(".gineProtect-details").text(data);
//  $(".accordion-item").click(function(){
//      //var data = $(".accordion-item.is-active .present")[0].outerHTML;
//      var data = $(".accordion-item.is-active .present").text();
//      console.log(data);
//      $(".gineProtect-details").text(data);
//  });
// });


$(document).ready(function(){
    var data = $(".accordion-item.is-active .present").html(); // Use .html() to get HTML content
    $(".gineProtect-details").html(data); // Use .html() to set HTML content

    function updateGineProtectDetails() {
        var data = $(".accordion-item.is-active .present").html();
        $(".gineProtect-details").html(data);
    }

    // Initial update when the page loads
    updateGineProtectDetails();

    $(".accordion-item").click(function(){
        // Check if the clicked item has the .is-active class
        if ($(this).hasClass("is-active")) {
            updateGineProtectDetails();
        } else {
            // If it doesn't have .is-active, clear the .gineProtect-details
            $(".gineProtect-details").empty();
        }
    });
});