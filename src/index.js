console.log('working');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = "pk.eyJ1Ijoib2hhZ2VydDEiLCJhIjoiY2phOXVqanZiMGx2NTJxbGk3OXFoZmFkaSJ9.qIsE7tHk7nccYJEhco4qTg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/satellite-streets-v10' // mapbox has lots of different map styles available.
});

const marker = document.createElement("div");
marker.style.height = '39px';
marker.style.width = '32px';
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
// module.exports = map;

