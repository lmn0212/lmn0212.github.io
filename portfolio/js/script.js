/**
 * Created by User on 26.06.2017.
 */



$(window).scroll(function(){
    var scrollTop = $(this).scrollTop(),
        target = $('#about'),
        target2 = $('#projects'),
        target3 = $('#contact'),
        opacity =  (scrollTop - target.offset().top + 350) / (scrollTop / 1.1),
        opacity2 =  (scrollTop - target.offset().top - 200) / (scrollTop / 2),
        opacity3 =  (scrollTop - target.offset().top - 650) / (scrollTop / 3);

    if (scrollTop > target.offset().top - $(window).height()) {
        target.css({
            'opacity': opacity
            // 'transform': 'translate(0px, ' + scrollTop / 23 +'%)'
        });
        console.log($(window).scrollTop());
        console.log(opacity);
    }
    if (scrollTop > target2.offset().top - $(window).height()) {
        target2.css({
            'opacity': opacity2
            // 'transform': 'translate(0px, ' + scrollTop / 23 +'%)'
        });
        console.log(opacity2);
    }
    if (scrollTop > target3.offset().top - $(window).height()) {
        target3.css({
            'opacity': opacity3
            // 'transform': 'translate(0px, ' + scrollTop / 23 +'%)'
        });
        console.log(opacity3);
    }
});
