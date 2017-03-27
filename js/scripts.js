//Instantiate map

var map = L.map('mapContainer').setView([19.2150, 72.8245], 15);

//map from mabbox
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRlbWlkZWEiLCJhIjoiY2l6ZGJueHpzMXV0MDJxcW9qYjc2ZnYzYyJ9.3ulYJ3UmEqZn7HHyX-vs7g', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 18,
id: 'mapbox://styles/mapbox/dark-v9',
access_token: 'pk.eyJ1IjoiYWRlbWlkZWEiLCJhIjoiY2l6ZGJueHpzMXV0MDJxcW9qYjc2ZnYzYyJ9.3ulYJ3UmEqZn7HHyX-vs7g'
}).addTo(map);

// adding and styling geoJson data

$.getJSON("data/data.geojson", function(data) { 
	console.log(data)
	L.geoJson(data).addTo(map);
});

	// var options = {
	// 	style: function(feature) {
	// 		var SectorColour;

	// 		if (feature.properties.cartodb_id == 1) {
	// 			SectorColour = '#b3e2cd';
	// 		}

	// 		if (feature.properties.cartodb_id == 2) {
	// 			SectorColour = '#fdcdac';
	// 		}

	// 		if (feature.properties.cartodb_id == 3) {
	// 			SectorColour = '#cbd5e8';
	// 		}

	// 		if (feature.properties.cartodb_id == 4) {
	// 			SectorColour = '#f4cae4';
	// 		}

	// 		if (feature.properties.cartodb_id == 5) {
	// 			SectorColour = '#e6f5c9';
	// 		}

	// 		if (feature.properties.cartodb_id == 6) {
	// 			SectorColour = '#fff2ae';
	// 		}

	// 		if (feature.properties.cartodb_id == 7) {
	// 			SectorColour = '#f1e2cc';
	// 		}

	// 		return {
	// 	      	color: SectorColour,
	// 	        fillColor: SectorColour,
	// 	        fillopacity: 1,
	// 	        weight: 2,
	//     	}
	// 	},	
	
	
	// 	onEachFeature: function (feature, layer) {
	// 		layer.on('click', function(){
	// 			$('#sidebar h2').text(feature.properties.age_group);
	// 			$('#sidebar h3').text(feature.properties.sex)	
	// 		})
	// 	}			
	
	// }
	
// 	L.geoJson(data,options).addTo(map);

// });






	



