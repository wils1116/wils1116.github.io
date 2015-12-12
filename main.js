function animateTheBox() {
  var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
  $(".mast").css('background', randomcolor + " url(images/header_transparent.png)");
}

animateTheBox();
var timer = window.setInterval(animateTheBox, 1000);
