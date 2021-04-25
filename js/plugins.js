$(document).ready(function () {
  //nice scroll
 $("body").niceScroll();$("body").niceScroll({horizrailenabled:false});$('.carousel').carousel({
  interval: 5000 });
//show color option div when click on the cog
$(".cog-check").click(function () {$(".color-option").fadeToggle();});


//change theme color on click
var colorLi = $(".color-option ul li");

colorLi
 .eq(0).css("backgroundColor", "#E41B17").end()
 .eq(1).css("backgroundColor", "#0895d1").end()
 .eq(2).css("backgroundColor", "#1abe8d").end()
 .eq(3).css("backgroundColor","#d79611");
 
 colorLi .click (function () {
       $("link[href*='theme']") .attr("href",$(this) .attr("data-value"));
  });

   //chasing the scroll to top element
  
  var scrollButton = $("#scroll-top");
  
  $(window).on ("scroll",function () {
   if ($(this).scrollTop() >= 700)
   {
    scrollButton.show();
   }
   else
   {
    scrollButton.hide();
   }
   });
  
    // click on Button to scroll top
    
   scrollButton.click(function () {$("html,body").stop().animate({scrollTop:0},600);});});
//loading screen

 $(window).on('load', function (){
   // loading elements 
       $(".loading-overlay .loader").fadeOut(2000,
        function() {
             //$("body").css("overflow","auto");      //show the scroll
             
            $(this).parent().fadeOut(1000,
           function() {
              $(this).remove();
           });
        });
  });
  // Buttons Effects 
$(document).ready(function(){
   $(".from-blue").hover(function(){
      $(this).find(".blue").eq(0).animate({
            width:"100%"
         },300)
      },function(){
         $(this).find(".blue").eq(0).animate({
            width:0
         },400)
      });
   $(".from-green").hover(function(){
      $(this).find(".green").eq(0).animate({
            width:"100%"
         },300)
      },function(){
         $(this).find(".green").eq(0).animate({
            width:0
         },400)
      });
   $(".from-purple").hover(function(){
      $(this).find(".purple").eq(0).animate({
            width:"100%"
         },300)
      },function(){
         $(this).find(".purple").eq(0).animate({
            width:0
         },400)
      });
   $(".from-red").hover(function(){
      $(this).find(".red").eq(0).animate({
            width:"100%"
         },300)
      },function(){
         $(this).find(".red").eq(0).animate({
            width:0
         },400)
      });
});