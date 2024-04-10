// Where you want to render the map.
var element = document.getElementById('osm-map');

// Height has to be set. You can do this in CSS too.
element.style = 'height:500px;';

// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile layer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

// Target's GPS coordinates.
var target = L.latLng('21.040759', '105.791002');

// Set map's center to target with zoom 14.
map.setView(target, 15);

// Place a marker on the same location.
// L.marker(target).addTo(map);

// var customControl = L.Control.extend({
// 	options: {
// 		position: 'topleft' // Vị trí của nút chức năng trên bản đồ
// 	},

// 	onAdd: function () {
// 		var button = L.DomUtil.create('button', 'custom-control'); // Tạo một button
// 		button.innerHTML = 'Custom Button'; // Đặt nội dung cho button
// 		button.onclick = function(){
// 			alert('Custom button clicked!'); // Xử lý sự kiện khi button được nhấp
// 		};
// 		return button;
// 	}
// });

// Thêm nút chức năng tùy chỉnh vào bản đồ
// map.addControl(new customControl());

map.removeControl(map.zoomControl);

var customZoomIn = L.Control.extend({
	options: {
		position: 'bottomleft'
	},

	onAdd: function () {
		var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

		var button = L.DomUtil.create('a', 'leaflet-control-zoom-in');
		button.innerHTML = '+';
		button.href = '#';

		container.appendChild(button);

		// Xử lý sự kiện khi nút được nhấp
		button.onclick = function(){
			map.zoomIn();
		};

		return container;
	}
});

// Thêm nút phóng to tùy chỉnh vào bản đồ
map.addControl(new customZoomIn());

// Tạo nút thu nhỏ tùy chỉnh
var customZoomOut = L.Control.extend({
	options: {
		position: 'bottomleft'
	},

	onAdd: function () {
		var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

		var button = L.DomUtil.create('a', 'leaflet-control-zoom-out');
		button.innerHTML = '-';
		button.href = '#';

		container.appendChild(button);

		// Xử lý sự kiện khi nút được nhấp
		button.onclick = function(){
			map.zoomOut();
		};

		return container;
	}
});

// Thêm nút thu nhỏ tùy chỉnh vào bản đồ
map.addControl(new customZoomOut());


// if ("geolocation" in navigator) {
// 	// Lấy vị trí hiện tại
// 	navigator.geolocation.getCurrentPosition(function(position) {
// 	  var latitude = position.coords.latitude;
// 	  var longitude = position.coords.longitude;
  
// 	  console.log("Latitude: " + latitude + ", Longitude: " + longitude);
// 	});
//   } else {
// 	console.log("Trình duyệt không hỗ trợ định vị.");
//   }