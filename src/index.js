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

const newMarker = marker("activities", [-74.009151, 40.705086]);
newMarker.addTo(map);
