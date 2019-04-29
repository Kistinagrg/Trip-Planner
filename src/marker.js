const mapboxgl = require("mapbox-gl");

let diffActs = {
  activities: "http://i.imgur.com/WbMOfMl.png",
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png"
};

function marker(activity, latLong) {
  // mapboxgl.Marker(newDom).setLngLat([-74.009151, 40.705086]).addTo(map)
  const anotherDom = document.createElement("div");
  anotherDom.style.width = "32px";
  anotherDom.style.height = "39px";
  anotherDom.style.backgroundImage = diffActs.activity;

  console.log(anotherDom);

  const newMarker = mapboxgl
    .Marker(anotherDom)
    .setLngLat(latLong)
    .addTo(map);

  console.log(newMarker);

  return newMarker;
}

module.exports = marker;
