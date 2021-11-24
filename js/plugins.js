// JavaScript Document

$(document).ready(function(){
	$('.carousel').carousel({
		interval:2000
		
		
	});
    //Show Color Div When Click On The Gear
    $(".gear-check").click(function(){
        $(".color-option").fadeToggle();
    });
    //Change Theme Color On Click
    var colorLi=$(".color-option ul li");
    colorLi
        .eq(0).css("backgroundColor","#EC880A").end()
        .eq(1).css("backgroundColor","#dc3545").end()
        .eq(2).css("backgroundColor","#0d6efd").end()
        .eq(3).css("backgroundColor","#198754");
    
    colorLi.click(function(){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        
        
    });
});

  //Loading Screen
  

  setTimeout(function(){
  $('.loading-overlay,.loading-overlay .spinner').fadeOut(3000)
});