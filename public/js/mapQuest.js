function initMap() {
	// add your code here
	L.mapquest.key = "ccbi8Vr9mGRy5GOmtdCtNLCBhX3HdYVM";

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.878810, -117.235910],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12, 
		zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.878810, -117.235910]).addTo(map);
}