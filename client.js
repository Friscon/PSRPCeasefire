import "https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.js";

const mapbox_token = "pk.eyJ1IjoibWFwYm94Y3JlYXRlIiwiYSI6ImNrYTg3c3Y2bzBhYWkycm11ZDI0ZGUxengifQ.dlzwdxuzygjewgO13vAsPQ";
mapboxgl.accessToken = mapbox_token;
console.log("11111");
var map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/dark-v10",
	zoom: 1.5,
	center: [0,20]
});

const getColor = count => {
	if(count >= 100) {
		return "red";
	}
	if(count >= 10) {
		return "blue";
	} 
	return "gray";
}

fetch("https://www.trackcorona.live/api/countries")
.then(response => response.json())
.then(payload => {
	const places = payload.data;
	//console.log("places ::: "+places);
	console.log("places[0].location :::: "+places[0].location);
/*

	const { location, latitude, longitude} = places[0];
			console.log("location, latitude, longitude : "+location +", "+latitude +", "+longitude);
	new mapboxgl.Marker({}).setLngLat([78.962883, 20.593683]).addTo(map);
	*/
	places
		.forEach(place => {
			const { location, latitude, longitude, confirmed} = place;
			console.log("location, latitude, longitude, confirmed : "+location +", "+latitude +", "+longitude+", "+confirmed);
			new mapboxgl.Marker({
				color : getColor(confirmed)
			}).setLngLat([longitude, latitude]).addTo(map);
		
		})

});


