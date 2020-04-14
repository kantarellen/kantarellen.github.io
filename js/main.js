function msgFUCK() {
  alert("Jag har ente teidh!");
}
function buy() {
  alert("Mycket givande val. Möt mig under den gamla eken vid gryningen med antalet beviljade skillingar.");
}
function aong() {
  alert("Sori, i no aonglish ?");
}
function duMaste() {
      alert('Jo. Du måste.');
}
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});