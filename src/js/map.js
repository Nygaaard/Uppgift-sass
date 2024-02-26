if (window.location.pathname.includes("map")) {
  const searchEl = document.getElementById("search");
  const buttonEl = document.getElementById("button");

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

    printMap(data[0].boundingbox, markerCoords, data[0].name);
  }

  function printMap(boundingBox, marker, locationName) {
    document.getElementById(
      "iFrame"
    ).src = `https://www.openstreetmap.org/export/embed.html?bbox=${boundingBox[2]}%2C${boundingBox[0]}%2C${boundingBox[3]}%2C${boundingBox[1]}&amp;layer=mapnik&marker=${marker.lat},${marker.long}`;
    document.getElementById(
      "big-map"
    ).href = `https://www.openstreetmap.org/search?query=${locationName}/${marker.lat}/${marker.long}`;
  }
}
