// JavaScript Document


$(function(){
  $(".alpha").hover(function(){
    $(this).fadeTo("fast", 0.8);
  },function(){
    $(this).fadeTo("fast", 1.0);
  });
});