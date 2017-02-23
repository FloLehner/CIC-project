var iterator = 0;
var sliderContent = new Array();
    sliderContent.push("Established in 1867, Buena Vista Park is the oldest official park in San Francisco.");
    sliderContent.push("Francis Ford Coppola allegedly wrote large portions of 'The Godfather' trilogy in Café Trieste.");
    sliderContent.push("During San Francisco's Gold Rush era, the Park was part of an area designated as the 'Great Sand Waste'.");
    sliderContent.push("The San Francisco Zodiac Killer of the late 1960s sent his notes and letters to the Chronicle's offices.");
    sliderContent.push("With 23 miles of ladders and 300,000 rivets in each tower, the Golden Gate Bridge was the world's longest span when it opened in 1937.");
    sliderContent.push("Alcatraz Island was a military fort before it became a prison.");
    sliderContent.push("The character of Steve McKee was based on actor Steve McQueen who studied with Bruce Lee in the later 60's.");
    sliderContent.push("Though Marilyn Monroe and Joe DiMaggio were not allowed to be married at the Church (DiMaggio had married his first wife at the Church but was divorced), the couple returned to the steps of the Church for photos, following their City Hall nuptials.");
    sliderContent.push("The two land plots that comprise the Park were used as a Jewish cemetery until 1894 when San Francisco prohibited all burials within city limits. The graves were moved to Colma, CA.");
    sliderContent.push("Every hour and half-hour, the clock bell atop the Ferry Building chimes portions of the Westminster Quarters.");

function scrollInfo(){
  $("html, body").scrollTop($("#introName").offset().top); 
}

function scrollFilm(){
  $("html, body").scrollTop($("#filmName").offset().top);
}

function scrollFacts(){
    $("html, body").scrollTop($("#funFactName").offset().top); 
}

function scrollSights(){
    $("html, body").scrollTop($("#sightsName").offset().top);
}

function slide(){ 
$("#sliderContent").empty(); 
if(iterator == 10){
iterator=0;    
}
$("#sliderContent").append(sliderContent[iterator]);


iterator++;
}



function gotData(data){
    alert(data.coord);
}

function golgengateBridge(){
   var myLatLng = {lat: 37.815751, lng: -122.478333};
   var marker = new google.maps.Marker({
   position: myLatLng,
   map: map,
   title: 'Golden Gate Bridge'
   }); 
   $("html, body").scrollTop($("#map").offset().top);
}

function alcatraz(){
  var myLatLng = {lat: 37.826463, lng: -122.421513};
   var marker = new google.maps.Marker({
   position: myLatLng,
   map: map,
   title: 'Alcatraz'
   }); 
   $("html, body").scrollTop($("#map").offset().top);
}

function unionSquare(){
   var myLatLng = {lat: 37.788353, lng: -122.420311};
   var marker = new google.maps.Marker({
   position: myLatLng,
   map: map,
   title: 'Union Square'
   });  
   $("html, body").scrollTop($("#map").offset().top);
}

function wharf(){
   var myLatLng = {lat: 37.80811, lng: -122.4253858};
   var marker = new google.maps.Marker({
   position: myLatLng,
   map: map,
   title: 'Fisherman´s Wharf '
   }); 
   $("html, body").scrollTop($("#map").offset().top);
}

function chinaTown(){
   var myLatLng = {lat: 37.7940865, lng: -122.4115089};
   var marker = new google.maps.Marker({
   position: myLatLng,
   map: map,
   title: 'Chinatown'
   }); 
   $("html, body").scrollTop($("#map").offset().top);
}

function cableCars(){
   var myLatLng = {lat: 37.7947085, lng: -122.4139139};  
   var marker = new google.maps.Marker({
   position: myLatLng,
   map: map,
   title: 'Cable Car Museum'
   }); 
   $("html, body").scrollTop($("#map").offset().top);
}

