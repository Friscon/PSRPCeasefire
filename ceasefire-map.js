import "https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.js";

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

    var data = getCeasefireData();
}
  

function getCeasefireData() {  

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://test.pax.peaceagreements.org/covid/api/ceasefires' 

    fetch(proxyUrl + targetUrl)
        .then((resp) => resp.json())

        .then(function(data) {

            var results = data.results;
            results.forEach(function(result) {
                console.log("uid : "+result.uid);
                
                var countries = result.countries;
                countries.forEach(function(country) {
                    console.log("country name : "+country.name);
                    setCoordinates(country);
                    console.log("latitude, longitude : "+country.latitude+","+country.longitude);

                    var popup = new mapboxgl.Popup()
                    .setHTML('<h3> '+country.name+' </h3>' 
                    +  '<h4>' + '<b>'+ 'Region: ' + '</b>'+result.region_entity+'</h4>' 
                    + '<h4>' + '<b>'+ 'Type: ' + '</b> '+result.declaration_type+' </h4>' );      
                   
                    var marker = new mapboxgl.Marker({color: 'green'})
                    .setLngLat([country.longitude, country.latitude])
                    .setPopup(popup)
                    .addTo(map);

                })
                
            })
        })
        .catch(function(error) {
            console.log(error);
        });
}

function setCoordinates(country) {

    console.log("In setCoordinates : "+country.name);
    switch(country.name) {
        case "United Nations": country.latitude = "37.09024";
                                country.longitude = "-95.712891";
                                break;
        case "Colombia": country.latitude = "4.570868";
                        country.longitude = "-74.297333"; 
                        break;
        case "Cameroon": country.latitude = "7.369721999999999";
                        country.longitude = "12.354722"; 
                        break;
        case "Philippines": country.latitude = "12.879721";
                            country.longitude = "121.774017"; 
                            break;
    }
}


