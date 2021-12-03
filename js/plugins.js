// JavaScript Document

$(document).ready(function () {
    "use strict";
    
    $('.carousel').carousel({
        
        interval:2000
    });
    
    //Show Color Div When Click On The Gear
    
    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });
    
    //Change Theme Color On Click
    
    var colorLi=$(".color-option ul li"),
        scrollButton=$("#scroll-top");
    colorLi
        .eq(0).css("backgroundColor","#EC880A").end()
        .eq(1).css("backgroundColor","#dc3545").end()
        .eq(2).css("backgroundColor","#0d6efd").end()
        .eq(3).css("backgroundColor", "#198754");
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
    
    $(window).scroll(function () {
        "use strict";
        if($(this).scrollTop()>= 700) {
            
            scrollButton.show()
        } else {
            
            scrollButton.hide();
        }

    });
    scrollButton.click(function (){
        "use strict";
        $("html,body").animate({scrollTop:0},600);
    });
});
//Loading Screen
setTimeout(function () {
    "use strict";
    $('.loading-overlay .spinner').fadeOut(2000, function () {
        
        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
        $(this).remove ();
            
        });
    });
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

});