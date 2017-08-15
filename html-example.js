$('a.navbar-brand').hover(function(){
  if($(this).text()==="Welcome"){
      $(this).fadeOut(1000)
      $(this).text("Thank You!")
      $(this).fadeIn(1000)
  }else {
    $(this).fadeOut(1000)
    $(this).text("Welcome")
    $(this).fadeIn(1000)
  }
})

$("li.change a").hover(function() {
  $(this).fadeOut(150);
  $(this).fadeIn(1500);
});
