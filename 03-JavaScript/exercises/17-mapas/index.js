/*
 *    (Curso JavaScript Básico)
 *        Ejercicio del Tema 17 - Mapas
 */

let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 40.6976637,
        lng: -74.1197638,
      },
      map,
      title: "New York",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 48.8589466,
        lng: 2.2769956,
      },
      map,
      title: "Paris",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -33.8473567,
        lng: 150.6517962,
      },
      map,
      title: "Sydney",
    })
  );
}