const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

function marker(activity, coords) {
  const markerDom = document.createElement("div");
  markerDom.style.width = "32px";
  markerDom.style.height = "39px";
  markerDom.style.backgroundImage = `url(${iconURLs[activity]})`;
  console.log("markerDom", markerDom, "ICON URLS:", iconURLs[activity]);

  const newMarker = new mapboxgl.Marker(markerDom).setLngLat(coords);

  return newMarker;
}

module.exports = marker;
