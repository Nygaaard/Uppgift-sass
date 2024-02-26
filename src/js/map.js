const searchEl = document.getElementById("search");
const buttonEl = document.getElementById("button");
const mapContainerEl = document.getElementById("map-container");

buttonEl.addEventListener("click", function () {
  getLocation(searchEl.value);
});

async function getLocation(searchValue) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${searchValue}&format=json`
  );

  const data = await response.json();
  //Hämtar ut första resultatet i data-arrayen ifall flera resultat hittas
  const markerCoords = { lat: data[0].lat, long: data[0].lon };

  printMap(data[0].boundingbox, markerCoords);
}

function printMap(boundingBox, marker) {
  document.getElementById(
    "iFrame"
  ).src = `https://www.openstreetmap.org/export/embed.html?bbox=${boundingBox[2]}%2C${boundingBox[0]}%2C${boundingBox[3]}%2C${boundingBox[1]}&amp;layer=mapnik&marker=${marker.lat},${marker.long}`;
}
