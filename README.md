# CIC-project

Applikationsbeschreibung 

Dieses Frontend enthält eine Single Page Application über San Franciscos Geschichte als Filmdestination.
Des Weiteren beinhaltet sie nützliche Informationen über San Francisco selbst.

Allgemeines:
Im Header wurde eine Navigation-Bar aus 4 Glyphicons integriert. Jedes dieser 4 Glyphicons verlinkt auf eine bestimmte Sektion 
der Seite. Klickt der User auf eines dieser Glyphicons springt die Seite auf die verlinkte Sektion.

Mit Hilfe der Google Maps Javascript API wurde ein Google Maps Objekt eingebaut, um San Francisco auch auf der Landkarte
darstellen zu können. Des Weiteren befinden sich am Seitenende einige von San Franciscos berühmtesten Sehenswürdigkeiten.
Klickt der User eine dieser Sehenswürdigkeiten an springt die Seite zurück zum Google-Maps Objekt und setzt einen Marker, um
den User zu zeigen wo sich die Sehenswürdigkeit befindet.

Der Unterpunkt Fun Facts beinhaltet einen Block, welcher einige Fakten über San Francisco darstellt. Dies wurde mit Hilfe eines
Arrays umgesetzt welches 10 Strings beinhaltet. Des Weiteren wurde ein Timer hinzugefügt, welcher den Block alle 10 Sekunden 
aktualisiert, um den nächstes Fun Fact im Block darzustellen. 

Mit Hilfe einer Tabelle werden einige der zuletzt gedrehten TV-Serien und Filme dargestellt.

Darstellung:
Bei dieser Single Page Application wurde großer Wert auf Responsive Design gelegt. Mit Hilfe von media queries im main.css file
wird sicher gestellt, dass die Web-Applikation auf den gängigsten Bildschirmgrößen optimal dargestellt wird. Des Weitern wird
das Framework Bootstrap verwendet. 

Verwendete media queries:
Große Bildschirme (Desktop PC, Laptop): @media only screen and (min-width: 1025px){}
Mittlere Bildschirme (Tablet): @media only screen and (min-width : 768px) and (max-width : 1024px) {}
Kleine Bildschirme (Smartphone): @media only screen and (max-width : 767px){}


Funktionalität:
Um die Funktionalität der Single Page Application zu gewährleisten wird JavaScript sowie jQuery verwendet. Die Funktionen befinden sich in 
den JavaScript Dateien main.js und logic.js welche beide in das HTML-file eingebunden wurden. Das main.js File ist zuständig für
die $(document).ready() Funktion und beinhaltet die click() Funktionen sowie den Timer für den Fun Fact Block. Die Hauptlogik
befindet sich dann im logic.js file. 

Application description 

This web application contains a so called single page application about San Francisco its history as film destination.
Moreover it provides useful information about the city itself. 

General Information:
The header includes a navigation bar which contains 4 glyphicons. Each glyphicon represents a certain section of the 
application. As soon as the user clicks on one of them the page will jump to the section linked to the glyphicon. 

Furthermore the application includes a google maps object that was implemented by using the Google Maps Javascript API. Due to
the map the user receives a general overview about San Francisco and is able to find the most important sights of the city. At 
the end of the application there are 6 buttons which represent the most renowned sights of San Francisco. If the user clicks on
one of these buttons the page will automatically jump to the map section and display a marker at the location of the sight.

The section Fun Facts provides the user with funny information about the city. It was implemented with an array that consist of 
strings and a timer that updates the Fun Facts block every 10 seconds.

Last but not least a table displays relevant information about recently produced films an TV-series.

Graphical representation:
One of the main goals during the development process of this single page application was to create a web application that
supports a wide range of screen sizes. As a consequence the application features three different media queries located in the 
main.css file in order to ensure a good performance on every screen size. Moreover the application includes the 
Bootstrap framework. 

Used media queries:
Big screens (Desktop PC, Laptop): @media only screen and (min-width: 1025px){}
Medium screens (Tablet): @media only screen and (min-width : 768px) and (max-width : 1024px) {}
Small screns (Smartphone): @media only screen and (max-width : 767px){}

Functionality:

In order to ensure a good application performance Javascript as well as the jQuery framework is used. The files main.js and logic.js
contain all the application logic. The main.js file is responsible for the $(document).ready() function and includes all the click()
functions that will be triggered when the user clicks on a certain element (e.g. navigation glyphicons). Moreover the timer for the
Fun Fact block is also included in the main.js file. All other functions can be found in the logic.js file. 
