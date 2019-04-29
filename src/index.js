const mapboxgl = require("mapbox-gl");
const marker = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFkZWxpbmVlbWRlIiwiYSI6ImNqdjJrY2h1cDI1a2M0M3NkOTRoaTdoc2cifQ.ZdczMZTWrLzdXEIUHcZ6VQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

// const newDom = document.createElement("div");
// newDom.style.width = "32px";
// newDom.style.height = "39px";
// newDom.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// // new mapboxgl.Marker(newDom).setLngLat([-74.009151, 40.705086]).addTo(map);
const newMarker = marker("activity", [-74.009151, 40.705086]);

newMarker.addTo(map);
console.log(newMarker);
