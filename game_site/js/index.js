/*global $*/
$(function () {
    $(window).scroll(function() {
        var scrolled = window.pageYOffset || $(document).scrollTop();
        if(scrolled >= 0) {
            $('.scrollbar-nav .main span').addClass('in-viewport');
            $('.scrollbar-nav .main i').addClass('active-area');
        } 
        if (scrolled > 200) {
            $('.scrollbar-nav .main span').removeClass('in-viewport');
            $('.scrollbar-nav .main i').removeClass('active-area');
            $('.scrollbar-nav .catalog span').addClass('in-viewport');
            $('.scrollbar-nav .catalog i').addClass('active-area');
        } else {
            $('.scrollbar-nav .catalog span').removeClass('in-viewport');
            $('.scrollbar-nav .catalog i').removeClass('active-area');
        }
        if (scrolled > 550) {
            $('.scrollbar-nav .main span').removeClass('in-viewport');
            $('.scrollbar-nav .catalog i').removeClass('active-area');
            $('.scrollbar-nav .catalog span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages span').addClass('in-viewport');
            $('.scrollbar-nav .advantages i').addClass('active-area');
        } else {
            $('.scrollbar-nav .advantages span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages i').removeClass('active-area');
        }
        
        if (scrolled >= 750) {
            $('.scrollbar-nav .main span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages i').removeClass('active-area');
            $('.scrollbar-nav .catalog span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages span').removeClass('in-viewport');
            $('.scrollbar-nav .couters span').addClass('in-viewport');
            $('.scrollbar-nav .couters i').addClass('active-area');
            $('.pie_progress').asPieProgress('start');
            $('.pie_progress').asPieProgress('go', '90%');
            $('.pie_progress2').asPieProgress('start');
            $('.pie_progress2').asPieProgress('go', '70%');
            $('.pie_progress3').asPieProgress('start');
            $('.pie_progress3').asPieProgress('go', '40%');
        } else {
            $('.scrollbar-nav .couters span').removeClass('in-viewport');
            $('.scrollbar-nav .couters i').removeClass('active-area');
        }
        if (scrolled >= 1050) {
            $('.scrollbar-nav .main span').removeClass('in-viewport');
            $('.scrollbar-nav .couters i').removeClass('active-area');
            $('.scrollbar-nav .catalog span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages span').removeClass('in-viewport');
            $('.scrollbar-nav .couters span').removeClass('in-viewport');
            $('.scrollbar-nav .new span').addClass('in-viewport');
            $('.scrollbar-nav .new i').addClass('active-area');
        } else {
            $('.scrollbar-nav .new span').removeClass('in-viewport');
            $('.scrollbar-nav .new i').removeClass('active-area');
        }
        
         if (scrolled >= 1300) {
            $('.scrollbar-nav .main span').removeClass('in-viewport');
            $('.scrollbar-nav .new i').removeClass('active-area');
            $('.scrollbar-nav .catalog span').removeClass('in-viewport');
            $('.scrollbar-nav .advantages span').removeClass('in-viewport');
            $('.scrollbar-nav .couters span').removeClass('in-viewport');
            $('.scrollbar-nav .new span').removeClass('in-viewport');
            $('.scrollbar-nav .feeds span').addClass('in-viewport');
            $('.scrollbar-nav .feeds i').addClass('active-area');
        } else {
            $('.scrollbar-nav .feeds span').removeClass('in-viewport');
            $('.scrollbar-nav .feeds i').removeClass('active-area');
        }

// scrollbar change color

        $('.scrollbar-nav a').each(function() {

            /* get position of navigation-element (distance from top minus half of it's height, so that it changes color while it's half over black and half over white background) */
            var elementPositionTop = parseFloat($(this).offset().top) + (parseFloat($(this).height() / 2));
            /* change color for each background-change */
            if (elementPositionTop > 416 && elementPositionTop < 840 || elementPositionTop > 1140 && elementPositionTop < 1440 || elementPositionTop > 1740 && elementPositionTop < 2040) {
                $(this).addClass('greyText');

            } else {
                $(this).removeClass('greyText');

            }
        });

    });
    $('.faq-item-1').click(function () {
        $('.faq-block-1 .faq-info p').toggleClass('on-active');
        $('.faq-item-1 span').toggleClass('focused');
    });
    $('.faq-item-2').click(function () {
        $('.faq-block-2 .faq-info p').toggleClass('on-active');
        $('.faq-item-2 span').toggleClass('focused');
    });
    $('.faq-item-3').click(function () {
        $('.faq-block-3 .faq-info p').toggleClass('on-active');
        $('.faq-item-3 span').toggleClass('focused');
    });
    $('.faq-item-4').click(function () {
        $('.faq-block-4 .faq-info p').toggleClass('on-active');
        $('.faq-item-4 span').toggleClass('focused');
    });
    $('.faq-item-5').click(function () {
        $('.faq-block-5 .faq-info p').toggleClass('on-active');
        $('.faq-item-5 span').toggleClass('focused');
    });
    $('.faq-item-6').click(function () {
        $('.faq-block-6 .faq-info p').toggleClass('on-active');
        $('.faq-item-6 span').toggleClass('focused');
    });


    // Counter section

    $(function($) {
        $('.pie_progress').asPieProgress({
            namespace: 'pie_progress',
            size: 90,
            speed: 30, // speed of 1/100
            barcolor: 'rgb(52,163,221)',
            barsize: '4',
            trackcolor: 'rgb(95,95,95)',
            fillcolor: 'none',
            easing: 'easeOutQuint'
        });

    });

    $(function($) {
        $('.pie_progress2').asPieProgress({
            namespace: 'pie_progress',
            size: 90,
            speed: 30, // speed of 1/100
            barcolor: 'rgb(52,163,221)',
            barsize: '4',
            trackcolor: 'rgb(95,95,95)',
            fillcolor: 'none',
            easing: 'easeOutQuint'
        });

    });

    $(function($) {
        $('.pie_progress3').asPieProgress({
            namespace: 'pie_progress',
            size: 90,
            speed: 40, // speed of 1/100
            barcolor: 'rgb(52,163,221)',
            barsize: '4',
            trackcolor: 'rgb(95,95,95)',
            fillcolor: 'none',
            easing: 'easeOutQuint'
        });

    });


});


$('.feedback-carousel').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 3,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    dots: true,
    dotsClass: 'carousel-indicators',
    responsive: [
        {
            breakpoint: 1600,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '15px',
              slidesToShow: 1
          }
        },
        {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '5px',
              slidesToShow: 1
        }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 1
      }
    }
  ]
});

//Navbar section

$('.dropdown').on('shown.bs.dropdown', function () {
    $(".dropdown-toggle", this).addClass( "red_color" );
})
$('.dropdown').on('hidden.bs.dropdown', function () {
    $(".dropdown-toggle", this).removeClass( "red_color" );
})

