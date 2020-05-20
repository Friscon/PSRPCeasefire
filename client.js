import "https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.js";
import "https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js";

const mapbox_token = "pk.eyJ1IjoibWFwYm94Y3JlYXRlIiwiYSI6ImNrYTg3c3Y2bzBhYWkycm11ZDI0ZGUxengifQ.dlzwdxuzygjewgO13vAsPQ";
mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/dark-v10",
	zoom: 1.5,
	center: [0,20]
});

map.on("load", function() {
        init()
      });

function init() {
	Tabletop.init({
		key: 'https://docs.google.com/spreadsheets/d/1Jse05qnSVkIrojsVHZ05rT_Se7F0Uw9qNUfMhY20M4E/edit?usp=sharing',
		callback: addPoints,
		simpleSheet: true
	});
}

function addPointsOrg(data) {

    data.forEach(function (row) {

    var popup = new mapboxgl.Popup()
        .setHTML(`<h3>` + row.Country + `</h3>` 
        +  '<h4>' + '<b>'+ 'Location: ' + '</b>' + row.Location + '</h4>' 
        + '<h4>' + '<b>'+ 'Parties: ' + '</b>' + row.Parties + '</h4>'
        + '<h4>' + '<b>'+ 'Latitude, Logitude : ' + '</b>' + row.Latitude +", "+ row.Longitude + '</h4>'); 
		
    var marker = new mapboxgl.Marker({color: 'green'})
        .setLngLat([row.Longitude, row.Latitude])
        
        .setPopup(popup)
        .addTo(map); 
    });
 } 
  

 function addPoints(data) {

   // data.forEach(function (row) {

//Cameroon
    var popup = new mapboxgl.Popup()
        .setHTML(`<h3> Cameroon </h3>` 
        +  '<h4>' + '<b>'+ 'Location: ' + '</b>Ambazonia</h4>' 
        + '<h4>' + '<b>'+ 'Parties: ' + '</b> Southern Cameroons Defence Forces (Socadef) </h4>'
        + '<h4>' + '<b>'+ 'Type: ' + '</b> Unilateral </h4>' );      
       
    var marker = new mapboxgl.Marker({color: 'green'})
        .setLngLat([12.354722, 7.369721999999999])
        .setPopup(popup)
        .addTo(map); 
//Colombia
    var popup = new mapboxgl.Popup()
    .setHTML(`<h3> Colombia </h3>` 
    +  '<h4>' + '<b>'+ 'Location: ' + '</b>N/A</h4>' 
    + '<h4>' + '<b>'+ 'Parties: ' + '</b> SEjercito de Liberación Nacional (ELN) </h4>'
    + '<h4>' + '<b>'+ 'Type: ' + '</b> Unilateral </h4>' );      
   
    var marker = new mapboxgl.Marker({color: 'green'})
        .setLngLat([-74.297333, 4.570868])
        .setPopup(popup)
        .addTo(map);
//Philippines
	var popup = new mapboxgl.Popup()
    .setHTML(`<h3> Philippines </h3>` 
    +  '<h4>' + '<b>'+ 'Location: ' + '</b>N/A</h4>' 
    + '<h4>' + '<b>'+ 'Parties: ' + '</b> Communist People\'s Party/National Democratic Front of the Philippines (NDFP)/New People’s Army (NPA) </h4>'
    + '<h4>' + '<b>'+ 'Type: ' + '</b> Unilateral </h4>' );      
   
    var marker = new mapboxgl.Marker({color: 'green'})
        .setLngLat([121.774017, 12.879721])
        .setPopup(popup)
        .addTo(map);
//Syria
	var popup = new mapboxgl.Popup()
    .setHTML(`<h3> Syria </h3>` 
    +  '<h4>' + '<b>'+ 'Location: ' + '</b>Northeast Syria</h4>' 
    + '<h4>' + '<b>'+ 'Parties: ' + '</b> Syrian Democratic Forces (SDF) </h4>'
    + '<h4>' + '<b>'+ 'Type: ' + '</b> Unilateral </h4>' );      
   
    var marker = new mapboxgl.Marker({color: 'green'})
        .setLngLat([38.996815, 34.8020749999999])
        .setPopup(popup)
        .addTo(map);
//Nigeria
	var popup = new mapboxgl.Popup()
    .setHTML(`<h3> Nigeria </h3>` 
    +  '<h4>' + '<b>'+ 'Location: ' + '</b>Benue state</h4>' 
    + '<h4>' + '<b>'+ 'Parties: ' + '</b> Chairs of Agatu, Etulo, Fulani, Hausa, Idoma, Igbo, Igede, Jukun, Tiv and Yoruba ethnic groups </h4>'
    + '<h4>' + '<b>'+ 'Type: ' + '</b> Multiparty </h4>' );      
   
    var marker = new mapboxgl.Marker({color: 'green'})
        .setLngLat([8.675277, 9.081999])
        .setPopup(popup)
        .addTo(map);
    
 } 


