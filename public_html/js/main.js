var map;
$(document).ready(function(){
    
$("#sliderContent").append("SFO has a museum dedicated to aviation history.");
   
window.setInterval(function(){
slide();    
}, 10000);

$("#filmGlyphicon").click(scrollFilm);
$("#infoGlyphicon").click(scrollInfo);
$("#thumbsGlyphicon").click(scrollFacts);
$("#mapGlyphicon").click(scrollSights);
$("#golgenGateBridgeButton").click(golgengateBridge);
$("#alcatrazButton").click(alcatraz);
$("#unionSquareButton").click(unionSquare);
$("#wharfButton").click(wharf);
$("#chinaTownButton").click(chinaTown);
$("#cableCarsButton").click(cableCars);



   
   
   
   
   
});

