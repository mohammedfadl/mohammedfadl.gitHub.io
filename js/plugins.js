/*global $,jQuery,alerl*/
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
});