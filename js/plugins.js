// JavaScript Document

$(document).ready(function(){
	$('.carousel').carousel({
		interval:2000
		
		
	})
    //Show Color Div When Click On The Gear
    $(".gear-check").click(function(){
        $(".color-option").fadeToggle();
    })
})