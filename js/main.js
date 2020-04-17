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
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); 
});
function goBack() {
  window.history.back();
}